# Cloftware Contact API

A Cloudflare Worker contact and newsletter API built with TypeScript, Hono, Supabase, and the Brevo transactional email API. It accepts only the Cloftware origins configured in `wrangler.toml`, stores contact messages in Supabase, and sends both an internal notification and customer acknowledgement.

## Included endpoints

- `POST /api/contact` — validates contact submissions, limits each IP to 5 requests per 10 minutes, blocks common disposable-email domains, checks the `website` honeypot, saves the message, and sends emails.
- `POST /api/newsletter` — validates and subscribes an email idempotently.
- `GET /health` — responds with `{ "status": "ok" }`.

## Local setup

1. Install Node.js 20 or newer, then run `npm install`.
2. In the Supabase SQL Editor, run [supabase/schema.sql](./supabase/schema.sql).
3. Copy `.dev.vars.example` to `.dev.vars` and fill in `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, and `BREVO_API_KEY`.
4. In Brevo, go to **SMTP & API → API Keys** and generate a key (this is not the same as an SMTP key/login). Under **Senders**, verify `MAIL_FROM` as a sender.
5. Run `npm run dev`.

For deployed environments, store the secrets with Wrangler:

```powershell
wrangler secret put SUPABASE_URL
wrangler secret put SUPABASE_SERVICE_ROLE_KEY
wrangler secret put BREVO_API_KEY
```

`MAIL_FROM`, `MAIL_FROM_NAME`, `MAIL_TO`, and `ALLOWED_ORIGINS` are non-secret variables already set in `wrangler.toml`. Change the origins there before deployment if the website uses additional production domains.

## Deploy

```powershell
npm run typecheck
npm run deploy
```

The database function atomically enforces the 5-per-10-minute policy per IP. It avoids a separate KV or Durable Object binding, so the Worker remains deployable on the Cloudflare Free plan while making the limit consistent across Cloudflare locations.

## Front-end integration

Send JSON with `Content-Type: application/json` from an approved browser origin. Contact fields are `name`, `email`, `company` (optional), `service` (optional), `message`, and hidden `website` (must remain empty). Newsletter accepts only `email`.

## Operational notes

Email is sent via `https://api.brevo.com/v3/smtp/email` (plain HTTPS, no TCP sockets — the previous raw-SMTP-over-`cloudflare:sockets` approach was replaced because STARTTLS from Workers was unreliable and was the cause of silently undelivered mail). If email delivery fails after the message has already been saved to Supabase, the request still returns success to the visitor (the lead isn't lost); check Worker logs for the Brevo error detail.
