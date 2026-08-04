import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Digital Twin dla mikro i małych firm" };

export default function DigitalTwinPage(){return <>
  <section className="pageHero"><div className="container narrow"><span className="eyebrow">Digital Business Twin</span><h1>Cyfrowy model firmy, który pomaga podejmować decyzje</h1><p>Nie zastępuje przedsiębiorcy ani księgowego. Porządkuje dane, pokazuje zależności i skraca drogę od problemu do działania.</p></div></section>
  <section className="section"><div className="container"><SectionHeading title="Jak to działa" lead="System buduje spójny obraz sytuacji firmy na podstawie danych, reguł biznesowych i celów właściciela." />
    <div className="processGrid">{[
      ["1","Dane","Wyciągi bankowe, faktury z KSeF, dane księgowe i proste informacje operacyjne."],
      ["2","Model firmy","Przychody, koszty, marża, płynność, podatki, ryzyka i zależności."],
      ["3","Analiza AI","Wykrywanie odchyleń, prognozy i scenariusze dopasowane do firmy."],
      ["4","Decyzja","Krótka lista priorytetów wraz z uzasadnieniem i spodziewanym efektem."]
    ].map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
  </div></section>
  <section className="section soft"><div className="container split"><div><span className="eyebrow">Zasada projektowa</span><h2>Prostota na ekranie. Złożoność pod spodem.</h2><p>Użytkownik nie powinien analizować dziesiątek wykresów. Powinien zobaczyć: co się zmieniło, dlaczego to ważne i co warto zrobić.</p></div><div className="decisionMock"><span>Dziś</span><h3>Masz trzy decyzje wymagające uwagi</h3><ol><li><b>Odzyskaj należności</b><small>wpływ na płynność: +18 tys. zł</small></li><li><b>Sprawdź koszt usług obcych</b><small>wzrost o 22% m/m</small></li><li><b>Zabezpiecz podatek VAT</b><small>termin za 9 dni</small></li></ol></div></div></section>
  <section className="section"><div className="container"><SectionHeading title="Zakres pierwszej wersji" />
    <div className="twoGrid"><article className="plainCard"><h3>Must have</h3><ul><li>import danych bankowych i KSeF</li><li>płynność i prognoza gotówki</li><li>wynik i rentowność</li><li>alerty o podatkach, kosztach i należnościach</li><li>rekomendacje zapisane prostym językiem</li></ul></article><article className="plainCard muted"><h3>Nie na start</h3><ul><li>rozbudowany ERP</li><li>pełna automatyzacja księgowości</li><li>setki konfigurowalnych dashboardów</li><li>autonomiczne podejmowanie decyzji</li><li>funkcje bez potwierdzonej wartości dla użytkownika</li></ul></article></div>
  </div></section>
  <section className="section"><div className="container ctaPanel"><div><h2>Sprawdź logikę produktu na danych demonstracyjnych</h2><p>Prosty prototyp pokazuje kierunek: mniej raportowania, więcej decyzji.</p></div><Link className="button white" href="/mvp">Uruchom demo</Link></div></section>
</>}
