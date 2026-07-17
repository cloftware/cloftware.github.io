import { Hono } from 'hono';
import { z } from 'zod';
import { sendContactEmails } from '../lib/mail';
import { getSupabase } from '../lib/supabase';
import { verifyTurnstile } from '../lib/turnstile';
import { clientIp, enforceOrigin } from '../middleware/security';
import type { ContactPayload, Env } from '../types';

const disposableDomains = new Set(['mailinator.com', 'guerrillamail.com', '10minutemail.com', 'temp-mail.org', 'tempmail.com', 'yopmail.com', 'throwawaymail.com', 'getnada.com', 'dispostable.com', 'sharklasers.com']);
const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required.').max(120),
  email: z.string().trim().email('A valid email address is required.').max(254),
  company: z.string().trim().max(160).optional().default(''),
  service: z.string().trim().max(120).optional().default(''),
  message: z.string().trim().min(20, 'Message must be at least 20 characters.').max(5000),
  website: z.string().max(0).optional().default(''),
  turnstileToken: z.string().min(1, 'Please complete the verification challenge.'),
}).strict();

export const contact = new Hono<{ Bindings: Env }>();

contact.post('/contact', enforceOrigin, async (c) => {
  const ip = clientIp(c);
  const { data: allowed, error: rateLimitError } = await getSupabase(c.env).rpc('consume_contact_rate_limit', { client_ip: ip });
  if (rateLimitError || !allowed) return c.json({ success: false, message: 'Too many requests. Please try again later.' }, 429);

  let input: z.infer<typeof contactSchema>;
  try {
    input = contactSchema.parse(await c.req.json());
  } catch (error) {
    const message = error instanceof z.ZodError ? error.issues[0]?.message ?? 'Invalid request.' : 'Invalid JSON body.';
    return c.json({ success: false, message }, 400);
  }
  const domain = input.email.slice(input.email.lastIndexOf('@') + 1).toLowerCase();
  if (disposableDomains.has(domain)) return c.json({ success: false, message: 'Please use a business or personal email address.' }, 400);

  const turnstileOk = await verifyTurnstile(c.env, input.turnstileToken, ip);
  if (!turnstileOk) return c.json({ success: false, message: 'Verification failed. Please refresh the page and try again.' }, 400);

  const payload: ContactPayload = { name: input.name, email: input.email.toLowerCase(), company: input.company, service: input.service, message: input.message };
  const createdAt = new Date().toISOString();
  const { error } = await getSupabase(c.env).from('contact_messages').insert({ ...payload, company: payload.company || null, service: payload.service || null, ip, user_agent: c.req.header('User-Agent') || null, created_at: createdAt });
  if (error) {
    console.error('Could not store contact message', error.message);
    return c.json({ success: false, message: "We couldn't save your message just now. Please try again in a moment, or email hello@cloftware.com directly." }, 503);
  }
  try {
    await sendContactEmails(c.env, payload, ip, createdAt);
  } catch (error) {
    // The message is already saved in Supabase, so treat a mail failure as a soft success:
    // the lead is not lost, and the user is not shown an error for something we can follow up on.
    console.error('Contact email delivery failed', error);
    return c.json({ success: true, message: "We've received your project details and a real person will reply within 1-2 business days." }, 201);
  }
  return c.json({ success: true, message: "We've received your project details and a real person will reply within 1-2 business days." }, 201);
});
