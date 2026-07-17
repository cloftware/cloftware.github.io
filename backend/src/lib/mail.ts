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

  const customerText = `Hi ${contact.name},\n\nThank you for contacting Cloftware. We've received your project details and a real person from our team will reply within 1-2 business days.\n\nBest regards,\nThe Cloftware Team\nhello@cloftware.com | https://cloftware.com`;
  const customerName = escapeHtml(contact.name);
  const customerHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thanks for contacting Cloftware</title>
<style>
  @media only screen and (max-width: 600px) {
    .email-container { width: 100% !important; }
    .email-padding { padding: 28px 24px !important; }
    .email-header-padding { padding: 28px 24px !important; }
    .email-footer-padding { padding: 20px 24px !important; }
    .email-heading { font-size: 22px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background-color:#f6f9fc;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">We've received your project details and will reply within 1-2 business days.</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f6f9fc;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" class="email-container" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td class="email-header-padding" style="background-color:#ffffff;padding:32px 40px;text-align:center;border-bottom:4px solid #007cc3;">
              <img src="https://cloftware.com/cloftware-logo.svg" width="150" height="38" alt="Cloftware" style="display:block;margin:0 auto;border:0;outline:none;text-decoration:none;max-width:150px;height:auto;">
            </td>
          </tr>
          <tr>
            <td class="email-padding" style="padding:40px;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#007cc3;">Message received</p>
              <h1 class="email-heading" style="margin:0 0 20px;font-size:26px;line-height:1.3;color:#0b1526;">Thanks for reaching out, ${customerName}!</h1>
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4b5768;">We've received your project details and a real person from our team will review them and reply within <strong style="color:#0b1526;">1-2 business days</strong>.</p>
              <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#4b5768;">If anything is urgent in the meantime, just reply directly to this email — it reaches us.</p>
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:999px;background-color:#007cc3;background-image:linear-gradient(135deg,#1c8ed6,#007cc3 60%,#045a8c);">
                    <a href="https://cloftware.com" style="display:inline-block;padding:14px 28px;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:999px;">Visit our website &rarr;</a>
                  </td>
                </tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5eaf2;margin:32px 0;">
              <p style="margin:0;font-size:14px;line-height:1.6;color:#6f7a8b;">Best regards,<br><strong style="color:#0b1526;">The Cloftware Team</strong></p>
            </td>
          </tr>
          <tr>
            <td class="email-footer-padding" style="background-color:#f6f9fc;padding:24px 40px;text-align:center;border-top:1px solid #e5eaf2;font-family:Arial,Helvetica,sans-serif;">
              <p style="margin:0 0 6px;font-size:12px;color:#6f7a8b;">Cloftware &middot; Software Engineering &middot; Web &middot; Mobile &middot; Cloud &middot; AI &middot; IoT</p>
              <p style="margin:0;font-size:12px;color:#6f7a8b;">
                <a href="mailto:hello@cloftware.com" style="color:#007cc3;text-decoration:none;">hello@cloftware.com</a>
                &nbsp;&middot;&nbsp;
                <a href="https://cloftware.com" style="color:#007cc3;text-decoration:none;">cloftware.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

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
