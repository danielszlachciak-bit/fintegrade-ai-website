# fintegrade.ai — Ankieta przedsiębiorców v2.0

Patch zastępuje obecną 4-krokową ankietę wersją 6-krokową, nastawioną na product discovery.

## Co mierzy v2

1. Segment firmy: wielkość, przychód, branża, B2B/B2C, sposób księgowości.
2. Obecne zachowanie: jak przedsiębiorca dziś kontroluje finanse i ile czasu na to poświęca.
3. Problem: maks. 4 problemy, jeden najważniejszy, częstotliwość i opcjonalny obecny workaround.
4. Priorytety MVP: maks. 3 funkcje, trudna decyzja z ostatnich 6 miesięcy, brakująca funkcja.
5. Dane i zaufanie: osobno bank i KSeF oraz maks. 3 główne obawy.
6. Wartość: WTP, warunek uzasadniający abonament, gotowość do pilota i opcjonalny e-mail.

## Pliki

- `components/SurveyForm.tsx` — formularz v2
- `components/SurveyForm.module.css` — dodatkowe style v2
- `app/ankieta/page.tsx` — nowy opis strony
- `app/api/survey/route.ts` — walidacja i zapis nowych pól
- `supabase/migrations/20260831_survey_v2.sql` — migracja bazy

## WAŻNE: kolejność wdrożenia

### 1. Supabase — najpierw migracja

Supabase -> SQL Editor -> New query.

Wklej zawartość:

`supabase/migrations/20260831_survey_v2.sql`

i kliknij Run.

Migracja jest idempotentna (`if not exists`), więc można ją uruchomić ponownie.

### 2. Skopiuj patch do repozytorium

Pracuj na branchu `content-review`.

Rozpakuj ZIP. Skopiuj ZAWARTOŚĆ folderu patcha do głównego folderu `fintegrade-ai-website`.

Windows powinien scalić katalogi `app`, `components`, `supabase` i zastąpić tylko pliki wskazane powyżej.

### 3. Build lokalny

W VS Code -> Terminal:

`npm run build`

Build powinien zakończyć się `Compiled successfully`.

### 4. GitHub

GitHub Desktop:

- sprawdź branch `content-review`
- commit: `Upgrade entrepreneur survey to v2`
- `Push origin`

### 5. Vercel Preview

Vercel -> projekt `fintegrade-ai-website` -> Deployments -> najnowszy deployment brancha `content-review` -> Visit.

Otwórz `/ankieta`.

Jeżeli Turnstile działał wcześniej na Preview, nie trzeba zmieniać zmiennych środowiskowych. Jeśli pojawi się błąd 110200, dodaj dokładny hostname bieżącego Preview w Cloudflare Turnstile -> Hostname Management.

## Test funkcjonalny

Przeprowadź co najmniej dwa testy:

### Test A — bez e-maila

- przejdź wszystkie 6 kroków
- nie podawaj e-maila
- nie zaznaczaj zgody na zaproszenie MVP
- wyślij

### Test B — zainteresowany pilotem

- wybierz `Tak — chętnie przetestuję na własnych danych`
- podaj e-mail
- zaznacz zgodę na zaproszenie MVP
- wyślij

## SQL do kontroli zapisanych danych

```sql
select
  id,
  created_at,
  survey_version,
  company_size,
  monthly_revenue,
  industry,
  customer_model,
  bookkeeping,
  current_finance_method,
  finance_time,
  finance_pain,
  primary_pain,
  pain_frequency,
  current_workaround,
  must_have,
  decision_challenge,
  missing_feature,
  bank_access,
  ksef_access,
  data_concerns,
  willingness_to_pay,
  value_trigger,
  pilot_intent,
  email,
  privacy_acknowledged,
  privacy_policy_version,
  mvp_consent,
  mvp_consent_at,
  source
from public.survey_submissions
order by created_at desc
limit 20;
```

Nowe rekordy powinny mieć `survey_version = 'v2.0'`.

## Kompatybilność ze starą ankietą

- stare rekordy pozostają bez zmian i będą oznaczone `survey_version = 'v1'`
- zachowane są dotychczasowe kolumny `finance_pain`, `must_have`, `willingness_to_pay`, `data_access`, e-mail i pola privacy
- `data_access` w v2 jest wypełniane technicznym podsumowaniem Bank + KSeF, a właściwa analiza powinna używać nowych pól `bank_access` i `ksef_access`
- stara kolumna `consent` pozostaje historyczna i nie jest używana przez v2
