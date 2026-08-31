import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Digital Twin dla mikro i małych firm",
  description:
    "Poznaj założenia fintegrade.ai i pomóż współtworzyć MVP cyfrowego doradcy finansowego dla mikro i małych firm.",
};

export default function DigitalTwinPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <span className="eyebrow">DIGITAL TWIN DLA MIKRO I MAŁYCH FIRM</span>
          <h1>Budujemy finansowego doradcę razem z przedsiębiorcami.</h1>
          <p>
            Pracujemy nad pierwszą wersją MVP fintegrade.ai. Na tym etapie nie
            udostępniamy publicznego demo — najpierw chcemy zbudować produkt,
            który odpowiada na realne problemy właścicieli firm, a nie na nasze
            wyobrażenie o tych problemach.
          </p>
          <p>
            Wypełniając krótką ankietę, możesz bezpośrednio wpłynąć na zakres
            pierwszej wersji produktu. Osoby zainteresowane testami będziemy
            zapraszać do bezpłatnego korzystania z MVP.
          </p>
          <div className="heroActions">
            <Link className="button primary" href="/ankieta">
              Wypełnij ankietę
            </Link>
            <a className="button secondary" href="#jak-to-ma-dzialac">
              Zobacz założenia
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="jak-to-ma-dzialac">
        <div className="container">
          <SectionHeading
            eyebrow="ZAŁOŻENIE PRODUKTU"
            title="Mniej raportów. Więcej odpowiedzi na pytanie: co powinienem zrobić?"
            lead="Digital Twin ma łączyć dane finansowe i kontekst firmy w jeden prosty obraz sytuacji — tak, aby przedsiębiorca szybciej widział problemy, rozumiał ich przyczyny i mógł oceniać możliwe działania."
            align="center"
          />

          <div className="processGrid">
            {[
              [
                "1",
                "Dane",
                "Rachunek bankowy, faktury z KSeF i podstawowe informacje o sposobie działania firmy.",
              ],
              [
                "2",
                "Obraz firmy",
                "Płynność, wynik, rentowność, zobowiązania, należności i najważniejsze zależności.",
              ],
              [
                "3",
                "Analiza",
                "Wykrywanie zmian, ryzyk i odchyleń oraz tworzenie scenariuszy dopasowanych do konkretnej firmy.",
              ],
              [
                "4",
                "Decyzja",
                "Krótka informacja: co wymaga uwagi, dlaczego jest ważne i jakie działania warto rozważyć.",
              ],
            ].map(([number, title, description]) => (
              <article key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="eyebrow">MVP POWSTAJE TERAZ</span>
            <h2>Nie chcemy zgadywać, czego potrzebuje przedsiębiorca.</h2>
            <p>
              Możemy zaprojektować dziesiątki funkcji. Problem w tym, że każda
              dodatkowa funkcja komplikuje produkt. Dlatego przed zamknięciem
              zakresu MVP chcemy sprawdzić, które problemy występują naprawdę,
              jak przedsiębiorcy radzą sobie z nimi dzisiaj i jaki sposób
              dostępu do danych są gotowi zaakceptować.
            </p>
            <p>
              Ankieta nie jest więc dodatkiem marketingowym. Jej wyniki mają
              wpływać na priorytety produktu, sposób integracji danych i zakres
              pierwszych testów.
            </p>
          </div>

          <div className="decisionMock">
            <span>Twój wpływ na MVP</span>
            <h3>Trzy rzeczy, które chcemy ustalić przed pierwszym testem</h3>
            <ol>
              <li>
                <b>Co naprawdę boli?</b>
                <small>które problemy pojawiają się często i są warte rozwiązania</small>
              </li>
              <li>
                <b>Co musi znaleźć się w MVP?</b>
                <small>maksymalnie kilka funkcji dających realną wartość</small>
              </li>
              <li>
                <b>Jakie dane można wykorzystać?</b>
                <small>bank, KSeF i akceptowalny poziom dostępu</small>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="PIERWSZA WERSJA"
            title="Zakładany zakres MVP"
            lead="To punkt wyjścia, a nie zamknięta specyfikacja. Ostateczne priorytety chcemy ustalić na podstawie odpowiedzi przedsiębiorców i pierwszych testów."
          />

          <div className="twoGrid">
            <article className="plainCard">
              <h3>Na czym chcemy się skoncentrować</h3>
              <ul>
                <li>import danych bankowych i danych z KSeF,</li>
                <li>bieżąca płynność i prognoza gotówki,</li>
                <li>wynik i rentowność pokazane prostym językiem,</li>
                <li>alerty o należnościach, kosztach i zobowiązaniach,</li>
                <li>krótka lista tematów wymagających uwagi,</li>
                <li>proste scenariusze „co się stanie, jeśli…”.</li>
              </ul>
            </article>

            <article className="plainCard muted">
              <h3>Czego świadomie nie chcemy budować na start</h3>
              <ul>
                <li>kolejnego rozbudowanego ERP,</li>
                <li>pełnej automatyzacji księgowości,</li>
                <li>dziesiątek dashboardów wymagających analizy przez użytkownika,</li>
                <li>autonomicznego podejmowania decyzji za przedsiębiorcę,</li>
                <li>funkcji, których wartości nie potwierdzili użytkownicy.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading
            eyebrow="WSPÓŁTWÓRZ PRODUKT"
            title="Co daje wypełnienie ankiety?"
            lead="Kilka minut odpowiedzi pozwala nam projektować MVP na podstawie rzeczywistych zachowań i ograniczeń przedsiębiorców."
            align="center"
          />

          <div className="processGrid">
            {[
              [
                "1",
                "Wpływasz na priorytety",
                "Wskazujesz problemy i funkcje, które powinny znaleźć się w pierwszej wersji zamiast dopiero w odległej roadmapie.",
              ],
              [
                "2",
                "Pomagasz zaprojektować dostęp do danych",
                "Możesz powiedzieć, jaki model wykorzystania rachunku bankowego i KSeF jest dla Ciebie akceptowalny.",
              ],
              [
                "3",
                "Możesz wejść do pierwszej grupy testowej",
                "Jeśli zostawisz e-mail i zaznaczysz chęć udziału, będziemy zapraszać do bezpłatnych testów MVP na danych własnej firmy.",
              ],
              [
                "4",
                "Pomagasz nam odrzucać złe pomysły",
                "Równie cenna jest informacja o tym, czego nie potrzebujesz, za co nie chcesz płacić lub jakich danych nie chcesz udostępniać.",
              ],
            ].map(([number, title, description]) => (
              <article key={number}>
                <b>{number}</b>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ctaPanel">
          <div>
            <span className="eyebrow light">5–6 MINUT</span>
            <h2>Pomóż nam zdecydować, co naprawdę powinno znaleźć się w MVP.</h2>
            <p>
              Nie pytamy o nazwę firmy, NIP ani dokładne dane finansowe. E-mail
              jest opcjonalny i potrzebny tylko wtedy, gdy chcesz otrzymać
              zaproszenie do bezpłatnych testów MVP.
            </p>
          </div>
          <Link className="button white" href="/ankieta">
            Wypełnij ankietę
          </Link>
        </div>
      </section>
    </>
  );
}
