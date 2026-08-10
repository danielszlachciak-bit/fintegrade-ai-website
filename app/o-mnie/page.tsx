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
            Zarządzałem finansami i doradzałem dużym firmom polskim i międzynarodowym. Dziś wykorzystuję swoje doświadczenie, aby, wykorzystując AI, również małe i średnie firmy miały dostęp do profesjonalnych usług zarządzania fiansami.
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container aboutGrid">

          {/* ZDJĘCIE */}
          <div className="portraitPhoto">
            <Image
              src="/daniel-szlachciak.jpg"
              alt="Daniel Szlachciak"
              width={800}
              height={1000}
              priority
            />
          </div>

          {/* TREŚĆ */}
          <div className="aboutCopy">

            <p className="largeText">
              Przez ponad 25 lat pracowałem w finansach i zarządzaniu
              przedsiębiorstwami — jako audytor, konsultant, menedżer
              finansowy, osoba odpowiedzialna za controlling oraz zarządzający
              organizacją. Poznałem biznes zarówno od strony liczb i
              raportowania, jak i codziennych decyzji dotyczących wyniku,
              płynności, kosztów, inwestycji i rozwoju.
            </p>

            <p>
              Swoją karierę zaczynałem w audycie. Pracując w EY i posiadając
              wówczas uprawnienia biegłego rewidenta, badałem duże polskie i
              międzynarodowe firmy. Później przeszedłem na stronę biznesu —
              pracowałem m.in. w handlu detalicznym i branży motoryzacyjnej, a
              także zarządzałem prywatnym szpitalem rozwijanym od etapu
              start-upu.
            </p>

            <p>
              Dziś obserwuję kolejną istotną zmianę w sposobie zarządzania
              firmami. Duże firmy intensywnie inwestują w sztuczną inteligencję,
              automatyzację analiz i systemy wspierające podejmowanie decyzji.
              Mają jednak zespoły, budżety, dane i kompetencje potrzebne do
              budowania takich rozwiązań. Mikro i małe firmy zazwyczaj nie mają
              takich możliwości.
            </p>

            <p className="aboutStatement">
              <strong>I właśnie tutaj widzę rolę fintegrade.ai.</strong>
            </p>

            <p>
              Moim celem jest wykorzystanie możliwości współczesnej AI w taki
              sposób, aby również właściciel niewielkiej firmy mógł korzystać z
              narzędzi, które pomagają mu lepiej rozumieć finanse, wcześniej
              dostrzegać problemy i trafniej oceniać konsekwencje decyzji — bez
              konieczności budowania działu controllingu, zatrudniania
              analityków czy samodzielnego stawania się ekspertem od sztucznej
              inteligencji.
            </p>

            <p>
              Dlatego rozwijam fintegrade.ai oraz koncepcję finansowego Digital
              Twin dla mikro i małych przedsiębiorców. Celem nie jest stworzenie
              kolejnego systemu raportowego ani chatbota odpowiadającego na
              ogólne pytania. Chodzi o połączenie danych firmy, logiki jej
              biznesu i AI w prosty system, który pomaga odpowiedzieć na trzy
              podstawowe pytania:
            </p>

            <div className="aboutQuestions">
              <strong>Co dzieje się w firmie?</strong>
              <strong>Co wymaga uwagi?</strong>
              <strong>Jakie działania warto rozważyć?</strong>
            </div>

            <p>
              AI może analizować więcej danych, szybciej dostrzegać zależności i
              pomagać porównywać scenariusze. Nie powinna jednak zastępować
              przedsiębiorcy w podejmowaniu decyzji. Technologia ma zwiększać
              jakość decyzji człowieka, a nie przejmować za niego
              odpowiedzialność.
            </p>

            {/* OBSZARY DOŚWIADCZENIA */}
            <div className="credentialRow">
              <span>finanse zarządcze</span>
              <span>controlling</span>
              <span>zarządzanie</span>
              <span>strategia</span>
              <span>AI w biznesie</span>
            </div>

            {/* CTA */}
            <div className="heroActions">
              <a
                className="button primary"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Profil LinkedIn
              </a>

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