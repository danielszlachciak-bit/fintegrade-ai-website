import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Bezpieczeństwo i prywatność" };

export default function SecurityPage(){return <>
  <section className="pageHero"><div className="container narrow"><span className="eyebrow">Security by design</span><h1>Zaufanie nie może opierać się na deklaracji</h1><p>Bezpieczeństwo jest częścią architektury produktu: od minimalizacji danych po kontrolę dostępu i rejestrowanie operacji.</p></div></section>
  <section className="section"><div className="container"><SectionHeading title="Zasady dla strony i przyszłej aplikacji" />
    <div className="securityGrid">{[
      ["Minimalizacja danych","Zbierane są wyłącznie informacje potrzebne do konkretnego celu. Ankieta nie wymaga NIP ani dokładnych kwot."],
      ["Brak kluczy w przeglądarce","Klucz serwerowy bazy danych pozostaje wyłącznie po stronie backendu. Formularz zapisuje dane przez kontrolowany endpoint."],
      ["Szyfrowane połączenie","Cały ruch produkcyjny odbywa się przez HTTPS, a przeglądarka wymusza bezpieczne połączenie."],
      ["Ochrona przed botami","Formularze są chronione przez Turnstile, walidację danych i limitowanie ruchu na warstwie hostingu."],
      ["Separacja środowisk","Dane testowe, demonstracyjne i produkcyjne powinny być przechowywane w oddzielnych projektach."],
      ["Kontrola użytkownika","W docelowej aplikacji dostęp do danych ma być możliwy do wycofania, a operacje powinny pozostawiać ślad audytowy."]
    ].map(([t,d])=><article key={t}><span>✓</span><h3>{t}</h3><p>{d}</p></article>)}</div>
  </div></section>
  <section className="section soft"><div className="container split"><div><span className="eyebrow">Uczciwe zastrzeżenie</span><h2>„Odporna na włamania” nie istnieje</h2><p>Można znacząco ograniczyć ryzyko, ale nie można zagwarantować pełnej odporności. Dlatego potrzebne są aktualizacje, kopie zapasowe, monitoring, testy i procedura reagowania na incydenty.</p></div><div className="securityList"><h3>Minimalny standard przed startem</h3><ul><li>włączone MFA dla Vercel, Supabase i rejestratora domeny</li><li>oddzielne konta administratorów</li><li>RLS na wszystkich tabelach publicznego schematu</li><li>Turnstile i reguły rate limiting</li><li>backup i test odtworzenia danych</li><li>automatyczne aktualizacje zależności i skan podatności</li></ul></div></div></section>
</>}
