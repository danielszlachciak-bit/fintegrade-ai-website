import { site } from "@/lib/site";

export const metadata = { title: "Regulamin serwisu" };

export default function Terms() {
  return (
    <section className="legalPage">
      <div className="container narrow">
        <h1>Regulamin serwisu fintegrade.ai</h1>
        <p>
          <strong>Ostatnia aktualizacja: 31 sierpnia 2026 r.</strong>
        </p>

        <h2>1. Charakter serwisu</h2>
        <p>
          Serwis ma charakter informacyjny, edukacyjny i rozwojowy. Treści oraz
          materiały prezentowane w serwisie nie stanowią porady podatkowej,
          prawnej, inwestycyjnej ani wiążącej rekomendacji finansowej.
        </p>

        <h2>2. Usługodawca</h2>
        <p>
          {site.legalName}
          <br />
          {site.legalAddress}
          <br />
          kontakt: <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>

        <h2>3. Zasady korzystania</h2>
        <p>
          Użytkownik zobowiązuje się nie dostarczać treści bezprawnych, nie
          podejmować prób naruszenia zabezpieczeń i nie wykorzystywać formularzy
          do automatycznego lub masowego przesyłania treści.
        </p>

        <h2>4. MVP, prototypy i AI</h2>
        <p>
          Rozwijane wersje MVP, prototypy oraz funkcje wykorzystujące AI mogą
          mieć charakter testowy, uproszczony lub niepełny. Informacje
          generowane przez takie rozwiązania wymagają weryfikacji danych i
          oceny osoby odpowiedzialnej przed podjęciem decyzji biznesowej.
        </p>

        <h2>5. Odpowiedzialność</h2>
        <p>
          Administrator dokłada należytej staranności do poprawności i
          bezpieczeństwa serwisu, jednak nie gwarantuje jego nieprzerwanej
          dostępności ani całkowitej wolności od błędów.
        </p>

        <h2>6. Kontakt i reklamacje</h2>
        <p>
          Uwagi dotyczące działania serwisu można zgłaszać na adres{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
