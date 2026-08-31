-- Ankieta przedsiębiorców v2.0
-- Uruchom w Supabase -> SQL Editor PRZED wdrożeniem nowego frontendu.

begin;

alter table public.survey_submissions
  add column if not exists survey_version text not null default 'v1',
  add column if not exists industry text,
  add column if not exists customer_model text,
  add column if not exists bookkeeping text,
  add column if not exists current_finance_method jsonb not null default '[]'::jsonb,
  add column if not exists finance_time text,
  add column if not exists primary_pain text,
  add column if not exists pain_frequency text,
  add column if not exists current_workaround text,
  add column if not exists decision_challenge text,
  add column if not exists missing_feature text,
  add column if not exists bank_access text,
  add column if not exists ksef_access text,
  add column if not exists data_concerns jsonb not null default '[]'::jsonb,
  add column if not exists value_trigger text,
  add column if not exists pilot_intent text;

create index if not exists survey_submissions_survey_version_idx
  on public.survey_submissions(survey_version);

create index if not exists survey_submissions_primary_pain_idx
  on public.survey_submissions(primary_pain);

comment on column public.survey_submissions.survey_version is
  'Wersja kwestionariusza. Nowe odpowiedzi od ankiety v2 zapisywane jako v2.0.';
comment on column public.survey_submissions.current_finance_method is
  'Sposoby, których respondent faktycznie używa dziś do kontroli finansów firmy.';
comment on column public.survey_submissions.primary_pain is
  'Jeden najważniejszy problem wybrany spośród finance_pain.';
comment on column public.survey_submissions.bank_access is
  'Preferowany model przyszłego dostępu do danych rachunku bankowego.';
comment on column public.survey_submissions.ksef_access is
  'Preferowany model przyszłego dostępu do KSeF / faktur.';
comment on column public.survey_submissions.pilot_intent is
  'Deklarowana gotowość do testu MVP na danych własnej firmy.';

commit;
