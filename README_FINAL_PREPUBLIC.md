# fintegrade.ai — final pre-public patch

Patch obejmuje ostatnią rundę zmian przed przygotowaniem strony do publicznego uruchomienia.

## Zakres

1. Przebudowana strona `/digital-twin`:
   - brak publicznego Demo,
   - informacja o trwających pracach nad MVP,
   - mocne CTA do ankiety,
   - wyjaśnienie, że odpowiedzi wpływają na zakres produktu,
   - informacja o planowanych bezpłatnych testach MVP dla osób, które zgłoszą zainteresowanie.

2. Usunięcie Demo z publicznej nawigacji:
   - Header: `Demo` -> `Ankieta`,
   - Home: `Zobacz demo` -> `Wypełnij ankietę`,
   - Footer: usunięty link do Demo,
   - sitemap: `/mvp` usunięte z publicznej mapy strony.
   Sam route `/mvp` nie jest kasowany — można go ponownie wykorzystać, gdy MVP będzie gotowe.

3. Ankieta v2:
   - Krok 5 ma nową narrację dotyczącą gotowości do udostępnienia danych aplikacji,
   - bank i KSeF pozostają rozdzielone,
   - jasno opisany jest read-only access,
   - usunięto odpowiedź sugerującą, że Demo jest już dostępne,
   - strona ankiety informuje o możliwości bezpłatnych testów MVP.
   Brak zmian w bazie danych i brak migracji SQL.

4. Regulamin:
   - Usługodawca: Daniel Szlachciak,
   - adres: Głogowa 11, 62-006 Dębogóra,
   - kontakt: kontakt@fintegrade.ai,
   - usunięte oznaczenie draftu,
   - sekcja Demo zastąpiona sekcją MVP/prototypy/AI.

5. Polityka prywatności:
   - dodany adres administratora,
   - usunięta zapowiedź przyszłej aktualizacji danych administratora,
   - data aktualizacji: 31 sierpnia 2026.

## Pliki

- `app/digital-twin/page.tsx`
- `app/ankieta/page.tsx`
- `components/SurveyForm.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `app/page.tsx`
- `app/sitemap.ts`
- `app/regulamin/page.tsx`
- `app/polityka-prywatnosci/page.tsx`
- `lib/site.ts`

## Instalacja

1. Upewnij się w GitHub Desktop, że pracujesz na branchu `content-review`.
2. Rozpakuj ZIP patcha.
3. W GitHub Desktop wybierz `Repository -> Show in Explorer`.
4. Skopiuj **zawartość** rozpakowanego folderu patcha do głównego folderu `fintegrade-ai-website`.
5. Potwierdź scalenie folderów i zastąpienie wskazanych plików.
6. W VS Code uruchom:

```powershell
npm run build
```

7. Jeśli build przejdzie, zrób commit np.:

`Final pre-public website updates`

8. `Push origin`.
9. Otwórz najnowszy Vercel Preview dla `content-review`.

## Smoke test

Sprawdź:

- `/` — brak linku Demo; karta mikrofirm kieruje do ankiety,
- `/digital-twin` — nowa narracja MVP i CTA do ankiety,
- `/ankieta` — Krok 5 ma nową treść, formularz przechodzi wszystkie 6 kroków,
- `/regulamin` — poprawne dane usługodawcy,
- `/polityka-prywatnosci` — poprawny adres administratora,
- menu desktop/mobile — `Ankieta` zamiast `Demo`,
- footer — brak Demo.

### Turnstile / Vercel Preview

Jeżeli na nowym Preview pojawi się `Troubleshoot` z kodem `110200`, nie jest to błąd tego patcha. Oznacza to, że aktualny hostname Vercel Preview nie jest dopuszczony w Cloudflare Turnstile. Najwygodniej testować przez stały branch URL `content-review` albo dodać dokładny hostname Preview w `Cloudflare -> Turnstile -> fintegrade-forms -> Hostname Management`.

Przed publicznym uruchomieniem upewnij się, że `fintegrade.ai` jest na liście dozwolonych hostname'ów Turnstile.
