import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const useCases = [
  ["Wiem, ile naprawdę zarabiam", "Przychody, koszty, przepływy i zobowiązania w jednym aktualnym obrazie firmy."],
  ["Dostrzegam problemy zanim stanie się poważny", "Wczesne sygnały o płynności, zaległych płatnościach, podatkach i rosnących kosztach."],
  ["Zamiast przeczucia opieram się na liczbach", "Scenariusze, konsekwencje i rekomendowane działania przedstawione prostym językiem."],
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">FINANSE ZARZĄDCZE × SZTUCZNA INTELIGENCJA</span>
          <h1>Firma nie potrzebuje więcej raportów. Potrzebuje <em>lepszych decyzji.</em></h1>
          <p>Budujemy fintegrade.ai — cyfrowego doradcę finansowego dla mikro i małych firm. Łączy dane finansowe z AI, aby pokazywać nie tylko, co wydarzyło się w firmie, ale przede wszystkim: co wymaga uwagi i co warto zrobić dalej.</p>
          <div className="heroActions"><Link className="button primary" href="/mvp">Zobacz demo</Link><Link className="button secondary" href="/ankieta">Wpłyń na produkt</Link></div>
          <div className="trustStrip"><span>Twoje dane pozostają Twoimi danymi</span><span>Tylko dane potrzebne do analizy</span><span>AI rekomenduje. Ty decydujesz.</span></div>
        </div>
        <div className="heroVisual" aria-label="Przykładowy pulpit finansowy">
          <div className="phoneFrame">
            <div className="phoneTop"><span>9:41</span><i /></div>
            <div className="phoneHeader"><span>Dzień dobry, Daniel</span><b>Twoja firma dziś</b></div>
            <div className="signalCard"><span>Płynność na 90 dni</span><strong>Stabilna</strong><div className="spark"><i /><i /><i /><i /><i /><i /></div><small>+18 400 zł prognozowanej nadwyżki</small></div>
            <div className="miniMetrics"><div><span>Wynik</span><b>12,8 tys.</b></div><div><span>Podatki</span><b>6,2 tys.</b></div></div>
            <div className="dailyAction"><span>Najważniejsze dziś</span><p>3 faktury po terminie obniżają płynność o 14%. Wyślij przypomnienia.</p><button>Przejdź do działania →</button></div>
          </div>
          <div className="floatingNote"><span>AI</span><b>Mniej ekranów.<br/>Więcej jasności.</b></div>
        </div>
      </div>
    </section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="PO CO TO POWSTAJE" title="Finanse firmy powinny być zrozumiałe przed końcem miesiąca" lead="Dane potrzebne do podjęcia decyzji często już istnieją — na rachunku bankowym, w fakturach i księgowości. Problem w tym, że są rozproszone. fintegrade.ai ma łączyć je w jeden aktualny obraz firmy i wskazywać to, co naprawdę wymaga uwagi." align="center" />
      <div className="threeGrid">{useCases.map(([t,d],i)=><article className="featureCard" key={t}><span className="number">0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="section soft"><div className="container split">
      <div><span className="eyebrow">DIGITAL TWIN FIRMY</span><h2>Nie kolejny chatbot. AI, które zna kontekst Twojej firmy.</h2><p>Digital Twin łączy dane z rachunku, faktur i księgowości z logiką działania firmy. Dzięki temu AI nie odpowiada ogólnie — analizuje konkretną sytuację, ograniczenia i scenariusze.</p><Link className="textLink" href="/digital-twin">Jak działa Digital Twin →</Link></div>
      <div className="twinDiagram"><div className="sourcePills"><span>Bank</span><span>KSeF</span><span>Księgowość</span><span>Plany</span></div><div className="twinCore"><i>FT</i><b>Finansowy model firmy</b><small style={{ display: "block", textAlign: "center" }}> płynność • rentowność <br /> ryzyko • decyzje </small></div><div className="outputPills"><span>Alerty</span><span>Prognozy</span><span>Scenariusze</span></div></div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="PRAKTYCZNA WIEDZA" title="AI w finansach. Konkretnie i praktycznie." lead="Konkretne przykłady, ograniczenia, ryzyka i procesy, które można wdrożyć w małej firmie." />
      <div className="articleGrid">
        <article><span>Cash flow</span><h3>Jak wcześniej zobaczyć problem z płynnością?</h3><p>Jak połączyć dane z rachunku, należności i zobowiązań, aby zobaczyć ryzyko zanim zabraknie gotówki?</p><Link href="/wiedza">Czytaj →</Link></article>
        <article><span>KSeF</span><h3>KSeF to nie tylko podatki. To również dane o Twoim biznesie.</h3><p>Sprzedaż, koszty, klienci, dostawcy i terminy płatności mogą tworzyć aktualny obraz sytuacji firmy.</p><Link href="/wiedza">Czytaj →</Link></article>
        <article><span>Decyzje</span><h3>AI może rekomendować. Kto powinien podejmować decyzję?</h3><p>Jak korzystać z analiz i rekomendacji AI, nie oddając technologii odpowiedzialności za firmę.</p><Link href="/wiedza">Czytaj →</Link></article>
      </div>
    </div></section>

    <section className="section"><div className="container ctaPanel"><div><span className="eyebrow light">WSPÓŁTWÓRZ FINTEGRADE.AI</span><h2>Pomóż nam zbudować finansowego doradcę, którego naprawdę warto używać.</h2><p>Budujemy fintegrade.ai dla mikro i małych przedsiębiorców. Krótka ankieta pomoże nam zrozumieć, które problemy finansowe są naprawdę istotne i jakie funkcje powinny znaleźć się w pierwszej wersji produktu.</p></div><Link className="button white" href="/ankieta">Wypełnij ankietę</Link></div></section>
  </>;
}
