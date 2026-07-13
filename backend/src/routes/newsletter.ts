import { Hono } from 'hono';
import { z } from 'zod';
import { enforceOrigin } from '../middleware/security';
import { getSupabase } from '../lib/supabase';
import type { Env } from '../types';

const schema = z.object({ email: z.string().trim().email('A valid email address is required.').max(254) }).strict();
export const newsletter = new Hono<{ Bindings: Env }>();

newsletter.post('/newsletter', enforceOrigin, async (c) => {
  let email: string;
  try { email = schema.parse(await c.req.json()).email.toLowerCase(); }
  catch (error) { return c.json({ success: false, message: error instanceof z.ZodError ? error.issues[0]?.message : 'Invalid JSON body.' }, 400); }
  const { error } = await getSupabase(c.env).from('newsletter_subscribers').upsert({ email }, { onConflict: 'email', ignoreDuplicates: true });
  if (error) { console.error('Could not subscribe email', error.message); return c.json({ success: false, message: 'Unable to subscribe right now.' }, 503); }
  return c.json({ success: true, message: 'You are subscribed.' }, 201);
});
