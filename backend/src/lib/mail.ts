import { connect } from 'cloudflare:sockets';
import type { ContactPayload, Env } from '../types';

const encoder = new TextEncoder();

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}

function encodeHeader(value: string): string {
  const bytes = new TextEncoder().encode(value.replace(/[\r\n]+/g, ' '));
  return `=?UTF-8?B?${btoa(String.fromCharCode(...bytes))}?=`;
}

function formatAddress(address: string): string {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) throw new Error('Invalid configured email address');
  return address;
}

function mimeMessage(from: string, to: string, subject: string, html: string, text: string): string {
  const boundary = `cloftware-${crypto.randomUUID()}`;
  const normalise = (value: string) => value.replace(/\r?\n/g, '\r\n').replace(/^\./gm, '..');
  return [
    `From: ${formatAddress(from)}`,
    `To: ${formatAddress(to)}`,
    `Subject: ${encodeHeader(subject)}`,
    'MIME-Version: 1.0',
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    '',
    `--${boundary}`,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    normalise(text),
    `--${boundary}`,
    'Content-Type: text/html; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    '',
    normalise(html),
    `--${boundary}--`,
  ].join('\r\n');
}

async function sendSmtp(env: Env, to: string, subject: string, html: string, text: string): Promise<void> {
  const port = Number(env.SMTP_PORT);
  if (!Number.isInteger(port) || port !== 465) {
    throw new Error('Zoho SMTP must use implicit TLS on port 465 in this Worker');
  }

  const socket = connect({ hostname: env.SMTP_HOST, port }, { secureTransport: 'on', allowHalfOpen: false });
  const reader = socket.readable.pipeThrough(new TextDecoderStream()).getReader();
  const writer = socket.writable.getWriter();
  let pending = '';

  const readLine = async (): Promise<string> => {
    for (;;) {
      const lineEnd = pending.indexOf('\n');
      if (lineEnd !== -1) {
        const line = pending.slice(0, lineEnd + 1);
        pending = pending.slice(lineEnd + 1);
        return line;
      }
      const { value, done } = await reader.read();
      if (done) throw new Error('SMTP server closed the connection unexpectedly');
      pending += value;
    }
  };
  const readResponse = async (expected: number[]): Promise<string> => {
    let response = '';
    for (;;) {
      const line = await readLine();
      const match = line.match(/^(\d{3})([ -])/);
      if (!match) throw new Error(`Invalid SMTP response: ${line.trim()}`);
      response += line;
      if (match[2] === ' ') {
        if (!expected.includes(Number(match[1]))) throw new Error(`SMTP rejected command: ${response.trim()}`);
        return response;
      }
    }
  };
  const command = async (value: string, expected: number[]) => {
    await writer.write(encoder.encode(`${value}\r\n`));
    await readResponse(expected);
  };

  try {
    await readResponse([220]);
    await command('EHLO cloftware.com', [250]);
    await command('AUTH LOGIN', [334]);
    await command(btoa(env.SMTP_USERNAME), [334]);
    await command(btoa(env.SMTP_PASSWORD), [235]);
    await command(`MAIL FROM:<${formatAddress(env.MAIL_FROM)}>`, [250]);
    await command(`RCPT TO:<${formatAddress(to)}>`, [250, 251]);
    await command('DATA', [354]);
    await writer.write(encoder.encode(`${mimeMessage(env.MAIL_FROM, to, subject, html, text)}\r\n.\r\n`));
    await readResponse([250]);
    await command('QUIT', [221]);
  } finally {
    reader.releaseLock();
    writer.releaseLock();
    socket.close();
  }
}

export async function sendContactEmails(env: Env, contact: ContactPayload, ip: string, createdAt: string): Promise<void> {
  const service = contact.service || 'General enquiry';
  const details = [
    ['Name', contact.name], ['Email', contact.email], ['Company', contact.company || 'Not provided'],
    ['Service', service], ['Message', contact.message], ['IP', ip], ['Date', new Date(createdAt).toUTCString()],
  ];
  const adminText = details.map(([label, value]) => `${label}: ${value}`).join('\n\n');
  const adminHtml = `<div style="font-family:Arial,sans-serif;color:#172033;line-height:1.5"><h2>New Contact Request</h2><table style="border-collapse:collapse">${details.map(([label, value]) => `<tr><th align="left" style="padding:8px 14px 8px 0;vertical-align:top">${escapeHtml(label)}</th><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('')}</table></div>`;
  const customerText = `Hi ${contact.name},\n\nThank you for contacting Cloftware. We have received your message and a member of our team will get back to you soon.\n\nBest regards,\nCloftware Team`;
  const customerHtml = `<div style="margin:0;background:#f6f8fb;padding:32px;font-family:Arial,sans-serif;color:#172033"><div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;padding:36px"><h1 style="margin-top:0;color:#14213d">Thanks for contacting Cloftware</h1><p>Hi ${escapeHtml(contact.name)},</p><p>Thank you for reaching out to Cloftware. We have received your message and a member of our team will get back to you soon.</p><p style="margin-bottom:0">Best regards,<br><strong>The Cloftware Team</strong></p></div></div>`;
  await sendSmtp(env, env.MAIL_TO, `New Contact Request - ${service}`, adminHtml, adminText);
  await sendSmtp(env, contact.email, 'Thanks for contacting Cloftware', customerHtml, customerText);
}
