import type { Env } from '../types';

const TURNSTILE_VERIFY_ENDPOINT = 'https://challenge.cloudflare.com/turnstile/v0/siteverify';

export async function verifyTurnstile(env: Env, token: string, ip: string): Promise<boolean> {
  if (!env.TURNSTILE_SECRET_KEY || !token) return false;

  const body = new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip });
  const response = await fetch(TURNSTILE_VERIFY_ENDPOINT, { method: 'POST', body });
  if (!response.ok) return false;

  const result = await response.json<{ success: boolean }>();
  return result.success === true;
}
