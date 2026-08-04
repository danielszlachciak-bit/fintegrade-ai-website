# Security checklist przed publikacją

## Konta i dostęp
- [ ] MFA na koncie rejestratora domeny, Vercel, GitHub i Supabase.
- [ ] Unikalne hasła zapisane w managerze haseł.
- [ ] Brak współdzielenia kont administratora.
- [ ] Klucz `SUPABASE_SERVICE_ROLE_KEY` tylko w Vercel Environment Variables.
- [ ] Klucz serwerowy nie występuje w repozytorium, kodzie klienta ani prefiksie `NEXT_PUBLIC_`.

## Baza danych
- [ ] Uruchomiono `supabase/schema.sql`.
- [ ] RLS jest aktywne dla każdej tabeli w schemacie `public`.
- [ ] Role `anon` i `authenticated` nie mają dostępu do tabel formularzy.
- [ ] Włączone codzienne backupy odpowiednie do planu Supabase.
- [ ] Ustalono retencję: rekomendacja startowa 24 miesiące dla ankiet, 12 miesięcy dla kontaktu — po ocenie prawnej i biznesowej.

## Formularze i hosting
- [ ] Cloudflare Turnstile skonfigurowany dla `fintegrade.ai` i `www.fintegrade.ai`.
- [ ] W Vercel Firewall ustawiono rate limit dla `/api/survey` i `/api/contact`.
- [ ] Przykładowy limit startowy: 10 żądań / 10 minut / źródło, następnie obserwacja fałszywych blokad.
- [ ] Włączone alerty dla skoków błędów 4xx/5xx i ruchu.
- [ ] Preview deployments są prywatne lub chronione logowaniem.

## Kod i proces
- [ ] Repozytorium jest prywatne.
- [ ] Dependabot/Renovate lub inne automatyczne alerty podatności są aktywne.
- [ ] Każda zmiana przechodzi przez preview deployment.
- [ ] Nie logujemy treści wiadomości, e-maili ani odpowiedzi ankietowych do logów serwera.
- [ ] Procedura incydentu zawiera: odcięcie kluczy, rotację sekretów, ocenę zakresu, komunikację i obowiązki RODO.

## Prawne i treści
- [ ] Uzupełniono dane administratora w `lib/site.ts`.
- [ ] Polityka prywatności i regulamin zostały zweryfikowane przez prawnika.
- [ ] Lista podmiotów przetwarzających odpowiada faktycznym dostawcom.
- [ ] Nie uruchomiono analityki ani marketingowych cookies bez właściwego mechanizmu zgody.
