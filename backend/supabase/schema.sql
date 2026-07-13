create extension if not exists pgcrypto;

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) <= 254),
  company text check (char_length(company) <= 160),
  service text check (char_length(service) <= 120),
  message text not null check (char_length(message) between 20 and 5000),
  ip text,
  user_agent text,
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique check (char_length(email) <= 254),
  created_at timestamptz not null default now()
);

create table if not exists public.contact_rate_limits (
  ip text primary key,
  window_started_at timestamptz not null default now(),
  requests smallint not null default 0 check (requests >= 0)
);

create or replace function public.consume_contact_rate_limit(client_ip text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  accepted boolean;
begin
  insert into contact_rate_limits (ip, window_started_at, requests)
  values (client_ip, now(), 1)
  on conflict (ip) do update
    set window_started_at = case
          when contact_rate_limits.window_started_at <= now() - interval '10 minutes' then now()
          else contact_rate_limits.window_started_at
        end,
        requests = case
          when contact_rate_limits.window_started_at <= now() - interval '10 minutes' then 1
          else contact_rate_limits.requests + 1
        end
    where contact_rate_limits.window_started_at <= now() - interval '10 minutes'
       or contact_rate_limits.requests < 5
  returning true into accepted;

  return coalesce(accepted, false);
end;
$$;

create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.contact_rate_limits enable row level security;
