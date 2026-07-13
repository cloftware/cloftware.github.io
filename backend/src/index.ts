import { cors } from 'hono/cors';
import { Hono } from 'hono';
import { contact } from './routes/contact';
import { newsletter } from './routes/newsletter';
import { allowedOrigins, securityHeaders } from './middleware/security';
import type { Env } from './types';

const app = new Hono<{ Bindings: Env }>();
app.use('*', securityHeaders);
app.use('/api/*', (c, next) => cors({ origin: allowedOrigins(c.env), allowMethods: ['POST', 'OPTIONS'], allowHeaders: ['Content-Type'], maxAge: 86400 })(c, next));
app.get('/health', (c) => c.json({ status: 'ok' }));
app.route('/api', contact);
app.route('/api', newsletter);
app.notFound((c) => c.json({ success: false, message: 'Not found.' }, 404));
app.onError((error, c) => { console.error('Unhandled error', error); return c.json({ success: false, message: 'Internal server error.' }, 500); });
export default app;
