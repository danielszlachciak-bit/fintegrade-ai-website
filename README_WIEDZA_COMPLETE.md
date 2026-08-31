# fintegrade.ai — KOMPLETNY PATCH sekcji Wiedza

Ten patch zastępuje cały moduł `/wiedza` kompletną, spójną wersją.

## Zawartość
- 20 artykułów: **Finanse przedsiębiorcy** (mikro i małe firmy)
- 11 artykułów: **Controlling × AI** (00–10)
- łącznie **31 artykułów**
- strona główna `/wiedza` z dwiema ścieżkami
- dynamiczne strony artykułów `/wiedza/[slug]`
- osobna nawigacja poprzedni/następny w każdej ścieżce
- responsywne style artykułów i biblioteki
- sitemap generujący wpisy dla wszystkich artykułów

## Pliki do zastąpienia
- `lib/knowledge.ts`
- `app/wiedza/page.tsx`
- `app/wiedza/[slug]/page.tsx`
- `app/wiedza/knowledge.module.css`
- `app/sitemap.ts`

Patch NIE zmienia formularzy, Supabase, strony głównej, Digital Twin, Controlling × AI, Kontakt, Privacy ani konfiguracji Turnstile.

## Instalacja — rekomendowana procedura
1. Otwórz GitHub Desktop i repo `fintegrade-ai-website`.
2. Przełącz się na branch `content-review`.
3. `Repository → Show in Explorer`.
4. Zrób kopię zapasową obecnych plików `app/wiedza` oraz `lib/knowledge.ts` (opcjonalnie, Git i tak zachowuje historię).
5. Rozpakuj ten ZIP do osobnego folderu.
6. Skopiuj ZAWARTOŚĆ rozpakowanego folderu do głównego folderu `fintegrade-ai-website`.
7. Gdy Windows zapyta o scalenie folderów / zastąpienie plików — wybierz `Tak` / `Replace`.
8. Otwórz repo w VS Code i uruchom: `npm run build`.
9. Build powinien pokazać `/wiedza` i **31 ścieżek SSG** dla artykułów (Next może pokazać kilka nazw + `+27 more paths`).
10. W GitHub Desktop zrób commit, np. `Rebuild complete knowledge hub`.
11. Kliknij `Push origin`.
12. Poczekaj na Vercel Preview dla `content-review`.

## Test w Vercel Preview
Sprawdź:
- `/wiedza`
- `/wiedza/zysk-to-nie-gotowka`
- `/wiedza/vat-nie-jest-przychodem`
- `/wiedza/czym-powinien-byc-wspolczesny-controlling`
- `/wiedza/ai-w-controllingu-od-czego-zaczac`
- `/wiedza/roi-z-ai-w-controllingu`

Na `/wiedza` powinno być widoczne:
- `Finanse przedsiębiorcy — 20 opublikowanych artykułów`
- `Controlling × AI — 11 opublikowanych artykułów`

## Supabase
Brak zmian. Patch jest w całości statyczny.
