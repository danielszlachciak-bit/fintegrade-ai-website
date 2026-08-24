import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const useCases = [
  ["Wiem, ile naprawdę zarabiam", "Przychody, koszty, przepływy i zobowiązania w jednym aktualnym obrazie firmy."],
  ["Dostrzegam problemy, zanim staną się poważne", "Wczesne sygnały o płynności, zaległych płatnościach, podatkach i rosnących kosztach."],
  ["Zamiast przeczucia opieram się na liczbach", "Scenariusze, konsekwencje i rekomendowane działania przedstawione prostym językiem."],
];

const consultingAreas = [
  ["Automatyzacja analiz", "Mniej ręcznego składania danych i komentarzy. Więcej czasu na interpretację i decyzje."],
  ["Forecasting i scenariusze", "Rolling forecast, warianty sprzedaży, kosztów i cash flow zamiast jednego statycznego planu."],
  ["AI jako copilot controllera", "Wsparcie analizy odchyleń, anomalii, komentarzy i pracy na dużych zbiorach danych."],
  ["Controlling wspierający decyzje", "Rentowność klientów i produktów, pricing, working capital i decyzje inwestycyjne."],
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="container heroGrid">
        <div className="heroCopy">
          <span className="eyebrow">FINANSE ZARZĄDCZE × CONTROLLING × AI</span>
          <h1>Lepsze dane. Lepszy controlling. <em>Lepsze decyzje.</em></h1>
          <p>fintegrade.ai łączy doświadczenie w finansach i zarządzaniu z możliwościami sztucznej inteligencji. Budujemy cyfrowego doradcę finansowego dla mikro i małych firm oraz pomagamy większym organizacjom projektować nowoczesne rozwiązania controllingowe wspierane przez AI.</p>
          <div className="heroActions">
            <Link className="button primary" href="#mikro">Dla mikro i małych firm</Link>
            <Link className="button secondary" href="/controlling-ai">Controlling × AI</Link>
          </div>
          <div className="trustStrip">
            <span>Technologia ma rozwiązywać realny problem</span>
            <span>AI wspiera analizę. Człowiek decyduje.</span>
            <span>Od danych do działania</span>
          </div>
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

    <section className="section audienceSection">
      <div className="container">
        <SectionHeading
          eyebrow="DWA OBSZARY. JEDEN CEL"
          title="AI ma poprawiać jakość decyzji — niezależnie od wielkości firmy."
          lead="fintegrade.ai rozwijamy w dwóch uzupełniających się kierunkach: jako skalowalny produkt dla mikro i małych firm oraz jako eksperckie wsparcie nowoczesnego controllingu w większych organizacjach."
          align="center"
        />
        <div className="audienceGrid">
          <article className="audienceCard audienceCardProduct">
            <div className="audienceTopline"><span>PRODUKT</span><b>Mikro i małe firmy</b></div>
            <h3>Prowadzę firmę i chcę lepiej rozumieć jej finanse.</h3>
            <p>Cyfrowy doradca finansowy ma łączyć dane z banku, faktur i księgowości, aby pokazywać płynność, rentowność, ryzyka i możliwe działania prostym językiem.</p>
            <ul>
              <li>aktualny obraz sytuacji firmy</li>
              <li>alerty i prognozy</li>
              <li>scenariusze i lista decyzji</li>
            </ul>
            <div className="audienceActions"><Link className="button primary" href="/digital-twin">Poznaj fintegrade.ai</Link><Link className="textLink" href="/mvp">Zobacz demo →</Link></div>
          </article>

          <article className="audienceCard audienceCardConsulting">
            <div className="audienceTopline"><span>CONSULTING</span><b>Średnie i większe firmy</b></div>
            <h3>Odpowiadam za finanse lub controlling i chcę wykorzystać AI praktycznie.</h3>
            <p>Pomagam przeprojektować analizę zarządczą, forecasting i procesy controllingowe tak, aby technologia skracała pracę ręczną i zwiększała wartość informacji dla biznesu.</p>
            <ul>
              <li>automatyzacja analiz i komentarzy</li>
              <li>forecasting i scenariusze</li>
              <li>AI jako copilot controllera</li>
            </ul>
            <div className="audienceActions"><Link className="button primary" href="/controlling-ai">Controlling × AI</Link><Link className="textLink" href="/kontakt">Porozmawiajmy →</Link></div>
          </article>
        </div>
      </div>
    </section>

    <section className="section" id="mikro"><div className="container">
      <SectionHeading eyebrow="MIKRO I MAŁE FIRMY" title="Finanse firmy powinny być zrozumiałe przed końcem miesiąca" lead="Dane potrzebne do podjęcia decyzji często już istnieją — na rachunku bankowym, w fakturach i księgowości. Problem w tym, że są rozproszone. fintegrade.ai ma łączyć je w jeden aktualny obraz firmy i wskazywać to, co naprawdę wymaga uwagi." align="center" />
      <div className="threeGrid">{useCases.map(([t,d],i)=><article className="featureCard" key={t}><span className="number">0{i+1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="section soft"><div className="container split">
      <div><span className="eyebrow">DIGITAL TWIN FIRMY</span><h2>Nie kolejny chatbot. AI, które zna kontekst Twojej firmy.</h2><p>Digital Twin łączy dane z rachunku, faktur i księgowości z logiką działania firmy. Dzięki temu AI nie odpowiada ogólnie — analizuje konkretną sytuację, ograniczenia i scenariusze.</p><Link className="textLink" href="/digital-twin">Jak działa Digital Twin →</Link></div>
      <div className="twinDiagram"><div className="sourcePills"><span>Bank</span><span>KSeF</span><span>Księgowość</span><span>Plany</span></div><div className="twinCore"><i>FT</i><b>Finansowy model firmy</b><small style={{ display: "block", textAlign: "center" }}> płynność • rentowność <br /> ryzyko • decyzje </small></div><div className="outputPills"><span>Alerty</span><span>Prognozy</span><span>Scenariusze</span></div></div>
    </div></section>

    <section className="section consultingTeaser"><div className="container split consultingSplit">
      <div>
        <span className="eyebrow">CONTROLLING × AI</span>
        <h2>AI ma odciążyć controlling z pracy, która nie wymaga controllera.</h2>
        <p>W większej organizacji punktem wyjścia nie powinno być pytanie „gdzie wdrożyć AI?”, tylko „które decyzje i procesy controllingowe warto poprawić?”. Dopiero później dobieramy dane, model i technologię.</p>
        <Link className="textLink" href="/controlling-ai">Zobacz obszary współpracy →</Link>
      </div>
      <div className="consultingMiniGrid">
        {consultingAreas.map(([title, description], index) => (
          <article key={title}>
            <span>0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </div></section>

    <section className="section"><div className="container">
      <SectionHeading eyebrow="PRAKTYCZNA WIEDZA" title="Finanse, controlling i AI. Konkretnie i praktycznie." lead="Wyjaśniamy podstawy finansów przedsiębiorcy i rozwijamy drugi obszar wiedzy: nowoczesny controlling wspierany przez AI." />
      <div className="articleGrid">
        <article><span>Cash flow</span><h3>Jak wcześniej zobaczyć problem z płynnością?</h3><p>Jak połączyć dane z rachunku, należności i zobowiązań, aby zobaczyć ryzyko zanim zabraknie gotówki?</p><Link href="/wiedza">Czytaj →</Link></article>
        <article><span>Rentowność</span><h3>Zysk to nie gotówka. Dlaczego firma może zarabiać i nie mieć pieniędzy?</h3><p>Jedno z najważniejszych rozróżnień w zarządzaniu małą firmą — pokazane na prostym przykładzie.</p><Link href="/wiedza/zysk-to-nie-gotowka">Czytaj →</Link></article>
        <article><span>Controlling × AI</span><h3>Od czego naprawdę warto zacząć wdrażanie AI w controllingu?</h3><p>Najpierw problem biznesowy i proces decyzyjny. Dopiero później narzędzia, automatyzacja i modele AI.</p><Link href="/controlling-ai">Poznaj podejście →</Link></article>
      </div>
    </div></section>

    <section className="section"><div className="container ctaPanel"><div><span className="eyebrow light">WSPÓŁTWÓRZ FINTEGRADE.AI</span><h2>Pomóż nam zbudować finansowego doradcę, którego naprawdę warto używać.</h2><p>Budujemy fintegrade.ai dla mikro i małych przedsiębiorców. Krótka ankieta pomoże nam zrozumieć, które problemy finansowe są naprawdę istotne i jakie funkcje powinny znaleźć się w pierwszej wersji produktu.</p></div><Link className="button white" href="/ankieta">Wypełnij ankietę</Link></div></section>
  </>;
}
