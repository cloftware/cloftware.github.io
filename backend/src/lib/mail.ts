import type { ContactPayload, Env } from '../types';

const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';

type Address = { email: string; name?: string };

type BrevoMessage = {
  to: Address[];
  subject: string;
  htmlContent: string;
  textContent: string;
  replyTo?: Address;
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}

async function sendMail(env: Env, message: BrevoMessage): Promise<void> {
  if (!env.BREVO_API_KEY) throw new Error('Missing BREVO_API_KEY');
  if (!env.MAIL_FROM) throw new Error('Missing MAIL_FROM');

  const response = await fetch(BREVO_ENDPOINT, {
    method: 'POST',
    headers: { 'api-key': env.BREVO_API_KEY, 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({ sender: { email: env.MAIL_FROM, name: env.MAIL_FROM_NAME || 'Cloftware' }, ...message }),
  });

  if (!response.ok) {
    // Brevo names the real cause (unverified sender, bad key, blocked recipient) in the body.
    throw new Error(`Brevo rejected the message (${response.status}): ${await response.text()}`);
  }
}

export async function sendContactEmails(env: Env, contact: ContactPayload, ip: string, createdAt: string): Promise<void> {
  const service = contact.service || 'General enquiry';
  const details: [string, string][] = [
    ['Name', contact.name],
    ['Email', contact.email],
    ['Company', contact.company || 'Not provided'],
    ['Service', service],
    ['Message', contact.message],
    ['IP', ip],
    ['Date', new Date(createdAt).toUTCString()],
  ];

  const adminText = details.map(([label, value]) => `${label}: ${value}`).join('\n\n');
  const adminHtml = `<div style="font-family:Arial,sans-serif;color:#172033;line-height:1.5"><h2>New Contact Request</h2><table style="border-collapse:collapse">${details
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:8px 14px 8px 0;vertical-align:top">${escapeHtml(label)}</th><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
    )
    .join('')}</table></div>`;

  const customerText = `Hi ${contact.name},\n\nThank you for contacting Cloftware. We have received your message and a member of our team will get back to you soon.\n\nBest regards,\nCloftware Team`;
  const customerHtml = `<div style="margin:0;background:#f6f8fb;padding:32px;font-family:Arial,sans-serif;color:#172033"><div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;padding:36px"><h1 style="margin-top:0;color:#14213d">Thanks for contacting Cloftware</h1><p>Hi ${escapeHtml(contact.name)},</p><p>Thank you for reaching out to Cloftware. We have received your message and a member of our team will get back to you soon.</p><p style="margin-bottom:0">Best regards,<br><strong>The Cloftware Team</strong></p></div></div>`;

  // Your copy goes first: if the customer acknowledgement fails, the lead has still reached you.
  await sendMail(env, {
    to: [{ email: env.MAIL_TO }],
    replyTo: { email: contact.email, name: contact.name },
    subject: `New Contact Request - ${service}`,
    htmlContent: adminHtml,
    textContent: adminText,
  });

  await sendMail(env, {
    to: [{ email: contact.email, name: contact.name }],
    subject: 'Thanks for contacting Cloftware',
    htmlContent: customerHtml,
    textContent: customerText,
  });
}
