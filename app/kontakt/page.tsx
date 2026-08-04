import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Kontakt" };

export default function ContactPage(){return <>
  <section className="pageHero"><div className="container narrow"><span className="eyebrow">Kontakt</span><h1>Porozmawiajmy o praktycznym wykorzystaniu AI w finansach firmy</h1><p>Projekt pilotażowy, współpraca ekspercka, test MVP lub konstruktywna krytyka koncepcji — każda z tych rozmów jest cenna.</p></div></section>
  <section className="section"><div className="container contactLayout"><div><h2>Najlepszy początek</h2><p>Napisz krótko, jaki problem chcesz rozwiązać, jakiej wielkości jest firma i z jakich danych dziś korzystacie.</p><div className="contactDirect"><span>E-mail</span><a href={`mailto:${site.email}`}>{site.email}</a></div><div className="contactDirect"><span>Odpowiedź</span><b>bez automatycznych sekwencji sprzedażowych</b></div></div><ContactForm /></div></section>
</>}
