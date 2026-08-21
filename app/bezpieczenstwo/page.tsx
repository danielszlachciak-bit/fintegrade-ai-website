import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Bezpieczeństwo i prywatność",
};

const currentSecurity = [
  [
    "Zbieramy tylko potrzebne dane",
    "Formularze i ankiety są projektowane zgodnie z zasadą minimalizacji danych. Nie prosimy o informacje, które nie są potrzebne do realizacji konkretnego celu.",
  ],
  [
    "Kontrolowany zapis danych",
    "Dane z formularzy przechodzą przez kontrolowaną warstwę serwerową, która sprawdza poprawność zapytania przed jego zapisaniem w bazie.",
  ],
  [
    "Szyfrowane połączenie",
    "Połączenie ze stroną odbywa się przez HTTPS. Dane przesyłane pomiędzy przeglądarką a serwerem są chronione podczas transmisji.",
  ],
  [
    "Ochrona formularzy",
    "Formularze są zabezpieczone przed automatycznymi zgłoszeniami, a przesyłane dane są walidowane przed zapisaniem do bazy.",
  ],
];

const applicationSecurity = [
  [
    "Tylko potrzebny zakres danych",
    "Aplikacja powinna otrzymywać wyłącznie taki zakres dostępu, jaki jest niezbędny do wykonania analizy i świadczenia konkretnej funkcji.",
  ],
  [
    "Kontrola po stronie użytkownika",
    "Użytkownik powinien wiedzieć, do jakich danych aplikacja ma dostęp, i mieć możliwość wycofania tego dostępu.",
  ],
  [
    "Rozliczalność operacji",
    "Dostęp do danych i kluczowe operacje powinny pozostawiać ślad pozwalający ustalić, co wydarzyło się w systemie.",
  ],
];

export default function SecurityPage() {
  return (
    <>
      {/* HERO */}
      <section className="pageHero">
        <div className="container narrow">
          <span className="eyebrow">SECURITY BY DESIGN</span>

          <h1>Zaufanie nie może opierać się na deklaracji</h1>

          <p>
            Bezpieczeństwo fintegrade.ai opieramy na minimalizacji danych,
            ograniczaniu dostępu i rozdzieleniu informacji publicznych od
            danych wymagających szczególnej ochrony. Wraz z rozwojem aplikacji
            standard bezpieczeństwa będzie rozwijany razem z jej
            funkcjonalnością.
          </p>
        </div>
      </section>

      {/* JAK CHRONIMY DANE DZISIAJ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="OBECNA STRONA"
            title="Jak chronimy dane już dziś"
            lead="Już na etapie strony informacyjnej i badań z przedsiębiorcami stosujemy podstawowe zasady ograniczające zakres przetwarzanych danych i ryzyko nieuprawnionego dostępu."
          />

          <div className="securityGrid">
            {currentSecurity.map(([title, description]) => (
              <article key={title}>
                <span>✓</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEZPIECZEŃSTWO APLIKACJI */}
      <section className="section soft">
        <div className="container">
          <SectionHeading
            eyebrow="BEZPIECZEŃSTWO APLIKACJI"
            title="Dostęp do finansów firmy wymaga wyższego standardu"
            lead="Docelowa aplikacja będzie pracowała na danych finansowych przedsiębiorstwa. Dlatego dostęp do rachunku bankowego, KSeF i innych źródeł danych musi być projektowany według zasady najmniejszych niezbędnych uprawnień."
          />

          <div className="securityGrid">
            {applicationSecurity.map(([title, description]) => (
              <article key={title}>
                <span>✓</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEZPIECZEŃSTWO JAKO PROCES */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">BEZPIECZEŃSTWO TO PROCES</span>

            <h2>Nie istnieje system pozbawiony ryzyka</h2>

            <p>
              Bezpieczeństwo nie polega na jednorazowym wdrożeniu zabezpieczeń.
              Wymaga aktualizacji, monitorowania, kontroli dostępu, kopii
              zapasowych, testów oraz przygotowania procedur reagowania na
              incydenty.
            </p>

            <p>
              Wraz z rozwojem fintegrade.ai mechanizmy bezpieczeństwa będą
              rozwijane odpowiednio do zakresu przetwarzanych danych,
              funkcjonalności aplikacji i związanego z nimi ryzyka.
            </p>
          </div>

          <div className="securityList">
            <h3>Podstawowe zasady</h3>

            <ul>
              <li>
                uwierzytelnianie wieloskładnikowe dla dostępu administracyjnego
              </li>
              <li>
                ograniczanie uprawnień zgodnie z rolą i rzeczywistą potrzebą
              </li>
              <li>szyfrowanie transmisji danych</li>
              <li>kopie zapasowe i możliwość odtworzenia danych</li>
              <li>monitorowanie i rejestrowanie istotnych zdarzeń</li>
              <li>aktualizacje i regularny przegląd zabezpieczeń</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section soft">
        <div className="container ctaPanel">
          <div>
            <span className="eyebrow light">
              PYTANIA O BEZPIECZEŃSTWO
            </span>

            <h2>Chcesz wiedzieć, co dzieje się z Twoimi danymi?</h2>

            <p>
              Chcemy jasno odpowiadać na pytania dotyczące tego, jakie dane
              wykorzystujemy, dlaczego ich potrzebujemy i w jaki sposób są
              chronione.
            </p>
          </div>

          <div className="heroActions">
            <Link className="button white" href="/kontakt">
              Skontaktuj się
            </Link>

            <Link
              className="button secondary"
              href="/polityka-prywatnosci"
            >
              Polityka prywatności
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}