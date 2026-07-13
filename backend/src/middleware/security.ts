import type { Context, MiddlewareHandler, Next } from 'hono';
import type { Env } from '../types';

export function allowedOrigins(env: Env): string[] {
  return env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean);
}

export function clientIp(c: Context<{ Bindings: Env }>): string {
  const cfIp = c.req.header('CF-Connecting-IP');
  return cfIp || 'unknown';
}

export const securityHeaders: MiddlewareHandler = async (_c, next) => {
  await next();
  _c.header('X-Content-Type-Options', 'nosniff');
  _c.header('X-Frame-Options', 'DENY');
  _c.header('Referrer-Policy', 'no-referrer');
  _c.header('Cache-Control', 'no-store');
};

export async function enforceOrigin(c: Context<{ Bindings: Env }>, next: Next): Promise<Response | void> {
  const origin = c.req.header('Origin');
  if (!origin || !allowedOrigins(c.env).includes(origin)) {
    return c.json({ success: false, message: 'Origin is not allowed.' }, 403);
  }
  return next();
}
