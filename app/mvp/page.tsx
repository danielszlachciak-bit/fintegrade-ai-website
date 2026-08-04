import { DemoSimulator } from "@/components/DemoSimulator";

export const metadata = { title: "Demo aplikacji" };

export default function MvpPage(){return <>
  <section className="pageHero"><div className="container narrow"><span className="eyebrow">Interaktywne demo</span><h1>Zobacz, jak może wyglądać finansowy Digital Twin małej firmy</h1><p>To demonstracja sposobu komunikacji i logiki decyzji — bez logowania i bez przesyłania prawdziwych danych.</p></div></section>
  <section className="section demoSection"><div className="container wide"><DemoSimulator /><p className="demoDisclaimer">Wyniki symulatora są poglądowe i nie stanowią porady finansowej, podatkowej ani inwestycyjnej.</p></div></section>
</>}
