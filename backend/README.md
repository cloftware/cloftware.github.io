# Cloftware Contact API

A Cloudflare Worker contact and newsletter API built with TypeScript, Hono, Supabase, and Brevo SMTP. It accepts only the Cloftware origins configured in `wrangler.toml`, stores contact messages in Supabase, and sends both an internal notification and customer acknowledgement.

## Included endpoints

- `POST /api/contact` — validates contact submissions, limits each IP to 5 requests per 10 minutes, blocks common disposable-email domains, checks the `website` honeypot, saves the message, and sends emails.
- `POST /api/newsletter` — validates and subscribes an email idempotently.
- `GET /health` — responds with `{ "status": "ok" }`.

## Local setup

1. Install Node.js 20 or newer, then run `npm install`.
2. In the Supabase SQL Editor, run [supabase/schema.sql](./supabase/schema.sql).
3. Create a `.env` file with your Supabase project URL, service-role key, and Brevo SMTP credentials. Use `SMTP_USER` for the Brevo SMTP login, `SMTP_PASS` for the Brevo SMTP key, and `SMTP_FROM` for a verified Brevo sender.
4. Authenticate your sender domain in Brevo. The Worker uses STARTTLS on port `587` (or implicit TLS on port `465`).
5. Run `npm run dev`.

For deployed environments, store the sensitive values as Wrangler secrets:

```powershell
wrangler secret put SUPABASE_URL
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
wrangler secret put SMTP_USER
wrangler secret put SMTP_PASS
wrangler secret put SMTP_FROM
```

`MAIL_FROM`, `MAIL_TO`, SMTP host/port, and `ALLOWED_ORIGINS` are non-secret variables in `wrangler.toml`. Change the origins there before deployment if the website uses additional production domains.

## Deploy

```powershell
npm run typecheck
npm run deploy
```

The database function atomically enforces the 5-per-10-minute policy per IP. It avoids a separate KV or Durable Object binding, so the Worker remains deployable on the Cloudflare Free plan while making the limit consistent across Cloudflare locations.

## Front-end integration

Send JSON with `Content-Type: application/json` from an approved browser origin. Contact fields are `name`, `email`, `company` (optional), `service` (optional), `message`, and hidden `website` (must remain empty). Newsletter accepts only `email`.

## Operational notes

The SMTP client uses the Workers TCP socket runtime, with STARTTLS for ports 587 and 2525 and direct TLS for port 465. The API reports an error if email delivery fails after the message has been saved, so monitor Worker logs for the delivery failure details.
