-- Uruchom w Supabase: SQL Editor -> New query -> Run
-- Tabele są zapisywane wyłącznie przez serwerowe endpointy z kluczem service role.

create extension if not exists pgcrypto;

create table if not exists public.survey_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company_size text not null,
  monthly_revenue text not null,
  finance_pain jsonb not null default '[]'::jsonb,
  data_access text not null,
  must_have jsonb not null default '[]'::jsonb,
  willingness_to_pay text not null,
  email text,
  consent boolean not null default false,
  privacy_acknowledged boolean not null default false,
  privacy_policy_version text,
  mvp_consent boolean not null default false,
  mvp_consent_at timestamptz,
  source text not null default 'fintegrade.ai'
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  topic text,
  message text not null,
  consent boolean not null default false,
  privacy_acknowledged boolean not null default false,
  privacy_policy_version text,
  source text not null default 'fintegrade.ai',
  handled_at timestamptz
);

alter table public.survey_submissions enable row level security;
alter table public.contact_messages enable row level security;

-- Brak polityk dla anon/authenticated = brak bezpośredniego dostępu przez publiczne API.
revoke all on table public.survey_submissions from anon, authenticated;
revoke all on table public.contact_messages from anon, authenticated;

grant all on table public.survey_submissions to service_role;
grant all on table public.contact_messages to service_role;

create index if not exists survey_submissions_created_at_idx on public.survey_submissions(created_at desc);
create index if not exists contact_messages_created_at_idx on public.contact_messages(created_at desc);
create index if not exists contact_messages_topic_idx on public.contact_messages(topic);

comment on table public.survey_submissions is 'Odpowiedzi ankietowe fintegrade.ai. Retencja zgodnie z obowiązującą polityką prywatności.';
comment on table public.contact_messages is 'Wiadomości kontaktowe fintegrade.ai. Retencja zgodnie z obowiązującą polityką prywatności.';
comment on column public.contact_messages.topic is 'Temat kontaktu: micro_product, controlling_ai, partnership lub other.';
