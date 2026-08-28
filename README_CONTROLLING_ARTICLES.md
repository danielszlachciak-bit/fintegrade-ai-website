# fintegrade.ai — patch: 11 artykułów Controlling × AI

## Zmienione pliki
- `lib/knowledge.ts` — dodaje 11 opublikowanych artykułów i pole `track`.
- `app/wiedza/page.tsx` — zamienia placeholder „W przygotowaniu” na aktywną serię 00–10.
- `app/wiedza/[slug]/page.tsx` — nawigacja poprzedni/następny działa osobno w każdej ścieżce Wiedzy; dodane renderowanie pogrubień i osobny disclaimer dla treści consultingowych.
- `app/wiedza/knowledge.module.css` — karta „Zacznij tutaj” i aktywne karty 10 kolejnych artykułów.

## Instalacja
1. Upewnij się, że jesteś na branchu `content-review`.
2. Rozpakuj ZIP do osobnego katalogu.
3. Skopiuj zawartość patcha do głównego folderu `fintegrade-ai-website`, pozwalając Windowsowi scalić foldery i zastąpić wskazane pliki.
4. W terminalu VS Code uruchom `npm run build`.
5. Jeżeli build jest zielony, w GitHub Desktop zrób commit, np. `Publish Controlling AI knowledge series`, a następnie `Push origin`.
6. Na Vercel Preview sprawdź `/wiedza`, artykuł 00 oraz kilka artykułów 01–10.

## Nie wymaga zmian w Supabase
To wyłącznie statyczna zawartość strony i nie zmienia bazy danych ani formularzy.
