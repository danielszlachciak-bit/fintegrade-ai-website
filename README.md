# fintegrade.ai — starter strony

Nowoczesna, responsywna strona dla projektu fintegrade.ai: prezentacja wiedzy o AI i finansach, Digital Twin, interaktywne demo, ankieta przedsiębiorców, formularz kontaktowy, bezpieczeństwo i dokumenty prawne.

## 1. Stack

- Next.js / React / TypeScript
- Vercel — hosting, SSL, preview deployments i firewall
- Supabase — PostgreSQL dla odpowiedzi ankietowych i kontaktu
- Cloudflare Turnstile — ochrona formularzy przed botami

## 2. Uruchomienie lokalne

Wymagania: Node.js 22 LTS i Git.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Otwórz `http://localhost:3000`.

## 3. Konfiguracja Supabase

1. Utwórz nowy projekt w Supabase. Dla produkcji używaj osobnego projektu niż dla testów.
2. Otwórz **SQL Editor** i uruchom cały plik `supabase/schema.sql`.
3. Otwórz **Project Settings → Data API** i skopiuj Project URL.
4. Otwórz **Project Settings → API Keys** i skopiuj klucz serwerowy `service_role` / `Secret key`.
5. W `.env.local` ustaw:

```env
NEXT_PUBLIC_SUPABASE_URL=https://...supabase.co
SUPABASE_SERVICE_ROLE_KEY=...
```

Klucza serwerowego nie wolno umieszczać w kodzie przeglądarki ani w zmiennej zaczynającej się od `NEXT_PUBLIC_`.

## 4. Cloudflare Turnstile

1. W Cloudflare utwórz widget Turnstile.
2. Dodaj domeny `fintegrade.ai`, `www.fintegrade.ai` oraz domenę preview do testów.
3. Ustaw zmienne:

```env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=...
TURNSTILE_SECRET_KEY=...
```

W produkcji endpointy formularzy odrzucą zgłoszenie, jeżeli sekret Turnstile nie jest skonfigurowany.

## 5. Publikacja przez GitHub i Vercel

1. Utwórz prywatne repozytorium GitHub.
2. W katalogu projektu wykonaj:

```bash
git init
git add .
git commit -m "Initial fintegrade.ai website"
git branch -M main
git remote add origin ADRES_REPOZYTORIUM
git push -u origin main
```

3. Zaloguj się do Vercel i wybierz **Add New → Project → Import Git Repository**.
4. Vercel rozpozna Next.js automatycznie.
5. W **Settings → Environment Variables** dodaj wszystkie zmienne z `.env.example` dla środowiska Production i Preview.
6. Uruchom deployment i przetestuj stronę na adresie `*.vercel.app`.

## 6. Podłączenie domeny fintegrade.ai

1. W projekcie Vercel wybierz **Settings → Domains → Add Domain**.
2. Dodaj `fintegrade.ai` oraz `www.fintegrade.ai`.
3. Vercel pokaże dokładne rekordy DNS. Zwykle domena główna wymaga rekordu A, a `www` rekordu CNAME.
4. W panelu firmy, w której kupiono domenę, dodaj rekordy dokładnie wskazane przez Vercel.
5. W Vercel ustaw przekierowanie jednej wersji na drugą, np. `www` → domena główna.
6. Po propagacji DNS Vercel automatycznie wystawi certyfikat SSL.

Nie kopiuj w ciemno wartości DNS z poradników — użyj wartości pokazanych w Twoim projekcie Vercel.

## 7. Zalecane ustawienia bezpieczeństwa Vercel

- Włącz MFA.
- Zabezpiecz Preview Deployments.
- W Firewall dodaj rate limiting dla `/api/survey` i `/api/contact`.
- Obserwuj błędy 4xx/5xx i anomalie ruchu.
- Nie dodawaj sekretów do repozytorium.

Pełna lista: `SECURITY_CHECKLIST.md`.

## 8. Gdzie są odpowiedzi ankietowe

W Supabase: **Table Editor → survey_submissions**. Wiadomości: **contact_messages**.

Na początku eksport do CSV wystarczy. Panel administratora warto zbudować dopiero wtedy, gdy ręczne przeglądanie zacznie być realnym ograniczeniem — to tańsze i bezpieczniejsze niż przedwczesne tworzenie kolejnego modułu.

## 9. Rekomendowana kolejność uruchomienia

1. Uzupełnij `lib/site.ts` i treść strony „O mnie”.
2. Zweryfikuj dokumenty prawne.
3. Uruchom bazę i Turnstile.
4. Opublikuj pod adresem Vercel i wykonaj test formularzy.
5. Podepnij domenę.
6. Włącz firewall i monitoring.
7. Dopiero później dodaj analitykę, CMS i logowanie do MVP.

## 10. Ważne ograniczenie

Starter ma sensowny poziom zabezpieczeń dla strony informacyjnej i badań rynku, ale nie jest jeszcze architekturą do przetwarzania wyciągów bankowych ani danych KSeF. Taka aplikacja wymaga osobnego modelu zagrożeń, kontroli dostępu, audytu, szyfrowania danych, retencji, zarządzania sekretami, procedur incydentowych i przeglądu prawnego.
