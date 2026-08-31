import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Kontakt" };

export default function ContactPage() {
  return <>
    <section className="pageHero">
      <div className="container narrow">
        <span className="eyebrow">Kontakt</span>
        <h1>Porozmawiajmy o finansach, controllingu i praktycznym wykorzystaniu AI.</h1>
        <p>Możesz napisać w sprawie fintegrade.ai dla mikrofirm, projektu controllingowego dla większej organizacji, współpracy eksperckiej albo konkretnego problemu, który warto przeanalizować.</p>
      </div>
    </section>
    <section className="section">
      <div className="container contactLayout">
        <div>
          <h2>Najlepszy początek</h2>
          <p>Napisz krótko, jaki problem chcesz rozwiązać, jakiej wielkości jest firma, z jakich danych dziś korzystacie i co w obecnym procesie działa zbyt wolno albo daje za mało wartości.</p>
          <div className="contactDirect"><span>E-mail</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
          <div className="contactDirect"><span>Zakres</span><b>mikrofirmy • controlling • AI • współpraca</b></div>
          <div className="contactDirect"><span>Odpowiedź</span><b>bez automatycznych sekwencji sprzedażowych</b></div>
        </div>
        <ContactForm />
      </div>
    </section>
  </>;
}
