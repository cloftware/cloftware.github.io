# Cloftware Backend Structure

```text
backend/
├── src/
│   ├── index.ts
│   ├── types.ts
│   ├── lib/
│   │   ├── supabase.ts
│   │   └── mail.ts
│   ├── middleware/
│   │   └── security.ts
│   └── routes/
│       ├── contact.ts
│       └── newsletter.ts
├── supabase/
│   └── schema.sql
├── .env
├── package.json
├── package-lock.json
├── tsconfig.json
├── wrangler.toml
└── README.md
```