# fintegrade.ai — wdrożenie drugiego filaru: Controlling × AI

## Co zostało dodane

- nowa strona `/controlling-ai`;
- Home jako marka parasolowa dla dwóch obszarów:
  - Digital Twin / produkt dla mikro i małych firm,
  - Controlling × AI / consulting dla średnich i większych firm;
- dwie ścieżki użytkownika na stronie głównej;
- zachowane dotychczasowe sekcje Digital Twin, demo, ankieta i content dla mikrofirm;
- rozszerzona sekcja Wiedza o drugi dział `Controlling × AI` bez usuwania 20 istniejących artykułów;
- nowe menu i footer;
- rozszerzony formularz kontaktowy o temat kontaktu;
- aktualizacja strony `O mnie` i metadanych serwisu;
- sitemap obejmuje `/controlling-ai` oraz wszystkie opublikowane artykuły Wiedzy.

## Ważne: Supabase przed testem formularza Kontakt

Nowa wersja formularza zapisuje pole `topic`. Przed testowaniem formularza uruchom w Supabase SQL Editor:

```sql
alter table public.contact_messages
  add column if not exists topic text;
```

Ten sam skrypt znajduje się w:

`supabase/migrations/20260824_add_contact_topic.sql`

## Test po wdrożeniu

1. Otwórz `/` i sprawdź oba wejścia: mikrofirmy oraz Controlling × AI.
2. Otwórz `/controlling-ai` na desktopie i telefonie.
3. Otwórz `/wiedza` — 20 dotychczasowych artykułów powinno pozostać dostępnych.
4. Otwórz `/kontakt`, wybierz temat i wyślij testową wiadomość.
5. Sprawdź rekord w Supabase:

```sql
select
  id,
  created_at,
  name,
  email,
  company,
  topic,
  message,
  privacy_acknowledged,
  privacy_policy_version,
  source
from public.contact_messages
order by created_at desc
limit 10;
```

Dla zapytania consultingowego `topic` powinno mieć wartość `controlling_ai`.

## Build

Po skopiowaniu plików do repozytorium uruchom lokalnie:

```bash
npm install
npm run build
```

W środowisku przygotowującym paczkę nie udało się pobrać zależności npm w dostępnym limicie czasu, dlatego pełny build Next.js powinien zostać wykonany lokalnie lub przez Vercel Preview. Zmodyfikowane pliki TS/TSX zostały sprawdzone parserem TypeScript pod kątem błędów składniowych i nie wykazały błędów składni.
