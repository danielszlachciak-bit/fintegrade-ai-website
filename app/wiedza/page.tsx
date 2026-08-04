import { SectionHeading } from "@/components/SectionHeading";

export const metadata = { title: "Wiedza: AI i finanse firmy" };

const articles=[
  ["Płynność","Jak zbudować prostą prognozę cash flow z danych bankowych i faktur","7 min","Praktyczny model 13-tygodniowy dla mikrofirmy — bez rozbudowanego systemu ERP."],
  ["AI w firmie","Pięć zadań finansowych, które warto automatyzować jako pierwsze","6 min","Low hanging fruit: mniej ręcznego przepisywania i szybsze wychwytywanie odchyleń."],
  ["KSeF","Co Digital Twin może zobaczyć w danych z KSeF","8 min","Struktura sprzedaży, dynamika kosztów i sygnały ryzyka ukryte w fakturach."],
  ["Bezpieczeństwo","Dostęp do rachunku tylko do odczytu — co to naprawdę oznacza","9 min","Zakres uprawnień, ryzyka, zgody i sposoby ograniczania ekspozycji danych."],
  ["Rentowność","Dlaczego dodatnie saldo na koncie nie oznacza zysku","5 min","Najczęstsze pomyłki właścicieli małych firm i prosty sposób ich uniknięcia."],
  ["Decyzje","Kiedy nie należy ufać rekomendacji AI","7 min","Sygnały ostrzegawcze, brakujące dane i obowiązek ludzkiej weryfikacji."]
];

export default function KnowledgePage(){return <>
  <section className="pageHero"><div className="container narrow"><span className="eyebrow">Baza wiedzy</span><h1>Praktycznie o AI, finansach i decyzjach w małej firmie</h1><p>Bez obietnic „rewolucji”. Z przykładami, ograniczeniami i rachunkiem ekonomicznym wdrożenia.</p></div></section>
  <section className="section"><div className="container"><SectionHeading title="Najnowsze tematy" lead="W tej wersji to katalog startowy. Kolejny krok to podłączenie prostego CMS lub publikowanie treści jako pliki MDX." />
  <div className="knowledgeGrid">{articles.map(([cat,t,time,d])=><article key={t}><div><span>{cat}</span><small>{time}</small></div><h2>{t}</h2><p>{d}</p><button disabled aria-label="Artykuł w przygotowaniu">Wkrótce</button></article>)}</div></div></section>
</>}
