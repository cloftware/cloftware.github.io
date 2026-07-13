# Cloftware Contact API

A Cloudflare Worker contact and newsletter API built with TypeScript, Hono, Supabase, and Zoho SMTP. It accepts only the Cloftware origins configured in `wrangler.toml`, stores contact messages in Supabase, and sends both an internal notification and customer acknowledgement.

## Included endpoints

- `POST /api/contact` — validates contact submissions, limits each IP to 5 requests per 10 minutes, blocks common disposable-email domains, checks the `website` honeypot, saves the message, and sends emails.
- `POST /api/newsletter` — validates and subscribes an email idempotently.
- `GET /health` — responds with `{ "status": "ok" }`.

## Local setup

1. Install Node.js 20 or newer, then run `npm install`.
2. In the Supabase SQL Editor, run [supabase/schema.sql](./supabase/schema.sql).
3. Copy `.dev.vars.example` to `.dev.vars` and enter your Supabase project URL, service-role key, and Zoho SMTP app password. Keep `SMTP_USERNAME` as `hello@cloftware.com`.
4. Confirm Zoho SMTP is enabled for the mailbox and use its application-specific password. This Worker uses implicit TLS, so `SMTP_PORT` must remain `465`.
5. Run `npm run dev`.

For deployed environments, store the sensitive values as Wrangler secrets:

```powershell
wrangler secret put SUPABASE_URL
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
wrangler secret put SMTP_USERNAME
wrangler secret put SMTP_PASSWORD
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

The SMTP client uses the Workers TCP socket runtime with direct TLS to Zoho on port 465. Email delivery runs with `waitUntil`, so a successfully persisted form submission is not made slower or unavailable by a transient mail-provider failure. Monitor Worker logs for delivery failures.
