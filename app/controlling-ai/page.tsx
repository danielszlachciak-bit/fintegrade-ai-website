import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Controlling × AI",
  description:
    "Praktyczne wykorzystanie AI w controllingu: automatyzacja analiz, forecasting, scenariusze, rentowność i wsparcie decyzji zarządczych.",
};

const areas = [
  {
    number: "01",
    title: "Automatyzacja analiz",
    description:
      "Mniej czasu na zbieranie, czyszczenie i przepisywanie danych. Więcej czasu na interpretację tego, co naprawdę zmieniło się w biznesie.",
    items: ["analiza odchyleń", "komentarze do wyników", "identyfikacja anomalii", "cykliczne analizy zarządcze"],
  },
  {
    number: "02",
    title: "Forecasting i scenariusze",
    description:
      "Od statycznego budżetu do modelu, który pomaga szybko ocenić konsekwencje zmian sprzedaży, kosztów i płynności.",
    items: ["rolling forecast", "scenariusze sprzedaży i kosztów", "cash-flow forecasting", "analiza wrażliwości"],
  },
  {
    number: "03",
    title: "AI jako copilot controllera",
    description:
      "AI nie zastępuje controllera. Może jednak przejąć znaczną część pracy przygotowawczej i przyspieszyć analizę dużych zbiorów danych.",
    items: ["praca na danych w języku naturalnym", "wstępne komentarze i hipotezy", "wyszukiwanie zależności", "porządkowanie informacji"],
  },
  {
    number: "04",
    title: "Controlling wspierający decyzje",
    description:
      "Raport jest użyteczny dopiero wtedy, kiedy pomaga odpowiedzieć: co się wydarzyło, dlaczego i jakie działanie warto rozważyć.",
    items: ["rentowność klientów i produktów", "pricing", "working capital", "decyzje inwestycyjne"],
  },
];

const lowHangingFruit = [
  ["Komentarz zarządczy do wyników", "AI przygotowuje pierwszą wersję komentarza i listę odchyleń wymagających uwagi. Controller weryfikuje i nadaje kontekst biznesowy."],
  ["Analiza odchyleń i anomalii", "Automatyczne wskazanie pozycji, których zmiana jest istotna, nietypowa albo wymaga dalszego wyjaśnienia."],
  ["Scenariusze bez przebudowy całego modelu", "Szybkie warianty: co stanie się z wynikiem i gotówką przy zmianie wolumenu, ceny, kosztu lub terminu płatności."],
  ["Wyszukiwanie wiedzy w danych finansowych", "Naturalny język jako warstwa dostępu do danych i definicji, bez zastępowania istniejących systemów źródłowych."],
];

export default function ControllingAiPage() {
  return (
    <>
      <section className="pageHero consultingHero">
        <div className="container narrow">
          <span className="eyebrow">CONTROLLING × AI</span>
          <h1>Nowoczesny controlling powinien pomagać podejmować decyzje, a nie tylko produkować raporty.</h1>
          <p>
            Pomagam firmom rozwijać controlling wykorzystujący automatyzację, dane i sztuczną inteligencję. Celem nie jest wdrażanie AI dla samej technologii, ale szybsza analiza, lepsze prognozy i więcej czasu controllerów na pracę, która rzeczywiście wymaga ich wiedzy.
          </p>
          <div className="heroActions consultingHeroActions">
            <Link className="button primary" href="/kontakt">Porozmawiajmy o Twoim controllingu</Link>
            <Link className="button secondary" href="#obszary">Zobacz obszary współpracy</Link>
          </div>
        </div>
      </section>

      <section className="section" id="obszary">
        <div className="container">
          <SectionHeading
            eyebrow="GDZIE AI MA SENS"
            title="Najpierw wartość dla biznesu. Potem technologia."
            lead="Największy potencjał widzę tam, gdzie controlling wykonuje dużo powtarzalnej pracy analitycznej, a użytkownik biznesowy potrzebuje szybszej odpowiedzi, lepszego scenariusza albo wcześniejszego sygnału ostrzegawczego."
          />
          <div className="consultingAreaGrid">
            {areas.map((area) => (
              <article className="consultingAreaCard" key={area.title}>
                <div className="consultingAreaHeader"><span>{area.number}</span><h3>{area.title}</h3></div>
                <p>{area.description}</p>
                <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container noAiGrid">
          <div>
            <span className="eyebrow">NIE ZACZYNAM OD AI</span>
            <h2>AI nie naprawi źle zaprojektowanego controllingu.</h2>
          </div>
          <div className="noAiCopy">
            <p>Jeżeli organizacja ma niespójne definicje KPI, słabą jakość danych, raporty których nikt nie wykorzystuje albo proces budżetowy oderwany od decyzji biznesowych, dodanie kolejnego narzędzia AI może tylko przyspieszyć produkowanie niewłaściwych informacji.</p>
            <p><strong>Dlatego punktem wyjścia jest problem biznesowy i proces decyzyjny.</strong> Dopiero później dobieramy dane, model, poziom automatyzacji i technologię.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="LOW HANGING FRUIT"
            title="Nie każde wdrożenie musi zaczynać się od dużego programu transformacyjnego."
            lead="Pierwsze rozwiązanie powinno być małe, mierzalne i użyteczne. Jeżeli działa na rzeczywistych danych i realnym procesie, dopiero wtedy warto je skalować."
          />
          <div className="lowFruitGrid">
            {lowHangingFruit.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionHeading
            eyebrow="JAK WSPÓŁPRACUJĘ"
            title="Od problemu do działającego prototypu."
            lead="Bez wielomiesięcznej fazy koncepcyjnej i bez wdrażania technologii, zanim wiadomo, czy rozwiązuje właściwy problem."
            align="center"
          />
          <div className="processGrid consultingProcess">
            <article><b>1</b><h3>Diagnoza</h3><p>Jak dziś działa controlling? Jakie decyzje powinien wspierać? Gdzie powstaje najwięcej pracy ręcznej i najmniej wartości?</p></article>
            <article><b>2</b><h3>Prototyp</h3><p>Budujemy małe rozwiązanie na rzeczywistych danych. Ma rozwiązać konkretny problem, a nie tylko demonstrować możliwości technologii.</p></article>
            <article><b>3</b><h3>Walidacja</h3><p>Sprawdzamy jakość wyniku, oszczędność czasu, użyteczność dla biznesu i ryzyka. Użytkownik pozostaje w pętli decyzyjnej.</p></article>
            <article><b>4</b><h3>Skalowanie</h3><p>Jeżeli rozwiązanie działa, integrujemy je z procesem i rozszerzamy na kolejne obszary, dane albo jednostki organizacyjne.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container experiencePanel">
          <div>
            <span className="eyebrow light">DOŚWIADCZENIE, NA KTÓRYM BUDUJĘ</span>
            <h2>Ponad 25 lat w finansach, controllingu i zarządzaniu.</h2>
            <p>Doświadczenie z audytu dużych polskich i międzynarodowych firm, controllingu, zarządzania finansami oraz odpowiedzialności za całą organizację pozwala mi patrzeć na AI nie jako na osobny projekt IT, ale jako narzędzie wspierające realne procesy zarządcze.</p>
          </div>
          <div className="experienceActions">
            <Link className="button white" href="/o-mnie">Więcej o mnie</Link>
            <Link className="button experienceGhost" href="/kontakt">Porozmawiajmy</Link>
          </div>
        </div>
      </section>

      <section className="section consultingFinalCta">
        <div className="container ctaPanel">
          <div>
            <span className="eyebrow light">KONKRETNY PROBLEM, NIE AI DLA AI</span>
            <h2>Masz proces controllingowy, który jest zbyt wolny, ręczny albo mało użyteczny dla biznesu?</h2>
            <p>Opisz krótko problem, dane i obecny sposób pracy. Pierwsza rozmowa powinna odpowiedzieć przede wszystkim na pytanie, czy AI w ogóle ma tutaj sens.</p>
          </div>
          <Link className="button white" href="/kontakt">Porozmawiajmy</Link>
        </div>
      </section>
    </>
  );
}
