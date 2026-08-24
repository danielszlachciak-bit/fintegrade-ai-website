import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata = {
  title: "O mnie",
};

export default function AboutPage() {
  return (
    <>
      <section className="pageHero">
        <div className="container narrow">
          <span className="eyebrow">Daniel Szlachciak</span>
          <h1>
            Ponad 25 lat w finansach i zarządzaniu. Dziś łączę to doświadczenie z AI — od mikrofirm po nowoczesny controlling w większych organizacjach.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container aboutGrid">
          <div className="portraitPhoto">
            <Image
              src="/daniel-szlachciak.jpg"
              alt="Daniel Szlachciak"
              width={800}
              height={1000}
              priority
            />
          </div>

          <div className="aboutCopy">
            <p className="largeText">
              Przez ponad 25 lat pracowałem w finansach i zarządzaniu przedsiębiorstwami — jako audytor, konsultant, menedżer finansowy, osoba odpowiedzialna za controlling oraz zarządzający organizacją. Poznałem biznes zarówno od strony liczb i raportowania, jak i codziennych decyzji dotyczących wyniku, płynności, kosztów, inwestycji i rozwoju.
            </p>

            <p>
              Swoją karierę zaczynałem w audycie. Pracując w EY i posiadając wówczas uprawnienia biegłego rewidenta, badałem duże polskie i międzynarodowe firmy. Później przeszedłem na stronę biznesu — pracowałem m.in. w handlu detalicznym i branży motoryzacyjnej, a także zarządzałem prywatnym szpitalem rozwijanym od etapu start-upu.
            </p>

            <p>
              Dziś obserwuję kolejną istotną zmianę w sposobie zarządzania firmami. Sztuczna inteligencja coraz mocniej wchodzi do analiz, raportowania, forecastingu i procesów decyzyjnych. Sama technologia nie tworzy jednak wartości. Wartość pojawia się dopiero wtedy, gdy rozwiązuje konkretny problem zarządczy i pracuje na właściwie zorganizowanych danych.
            </p>

            <p className="aboutStatement">
              <strong>I właśnie tutaj widzę rolę fintegrade.ai.</strong>
            </p>

            <p>
              Rozwijam dwa uzupełniające się kierunki. Pierwszy to finansowy Digital Twin dla mikro i małych przedsiębiorców — prosty system, który ma pomagać lepiej rozumieć finanse firmy, wcześniej dostrzegać problemy i trafniej oceniać konsekwencje decyzji bez budowania własnego działu controllingu.
            </p>

            <p>
              Drugi kierunek to współpraca ze średnimi i większymi firmami przy projektowaniu nowoczesnych rozwiązań controllingowych wspieranych przez AI: automatyzacji analiz, forecastingu, scenariuszy, analizy rentowności i narzędzi wspierających pracę controllerów oraz menedżerów.
            </p>

            <p>
              W obu przypadkach zasada jest ta sama: nie chodzi o stworzenie kolejnego raportu ani wdrożenie AI dla samej technologii. Chodzi o połączenie danych, logiki biznesu i analizy w system, który pomaga odpowiedzieć na trzy podstawowe pytania:
            </p>

            <div className="aboutQuestions">
              <strong>Co dzieje się w firmie?</strong>
              <strong>Co wymaga uwagi?</strong>
              <strong>Jakie działania warto rozważyć?</strong>
            </div>

            <p>
              AI może analizować więcej danych, szybciej dostrzegać zależności i pomagać porównywać scenariusze. Nie powinna jednak zastępować człowieka w podejmowaniu decyzji. Technologia ma zwiększać jakość decyzji, a nie przejmować odpowiedzialność za ich skutki.
            </p>

            <div className="credentialRow">
              <span>finanse zarządcze</span>
              <span>controlling</span>
              <span>zarządzanie</span>
              <span>strategia</span>
              <span>AI w biznesie</span>
            </div>

            <div className="heroActions">
              <a className="button primary" href={site.linkedin} target="_blank" rel="noreferrer">
                Profil LinkedIn
              </a>
              <Link className="button secondary" href="/controlling-ai">
                Controlling × AI
              </Link>
              <Link className="button secondary" href="/kontakt">
                Skontaktuj się
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
