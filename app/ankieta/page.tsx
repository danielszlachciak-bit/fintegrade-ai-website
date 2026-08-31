import { SurveyForm } from "@/components/SurveyForm";

export const metadata = {
  title: "Ankieta dla przedsiębiorców",
  description:
    "Badanie potrzeb mikro i małych przedsiębiorców dotyczące finansów, płynności, rentowności, danych i narzędzi wspierających decyzje.",
};

export default function SurveyPage() {
  return (
    <>
      <section className="pageHero surveyHero">
        <div className="container narrow">
          <span className="eyebrow">BADANIE POTRZEB PRZEDSIĘBIORCÓW</span>
          <h1>Jak naprawdę zarządzasz finansami swojej firmy?</h1>
          <p>
            6 krótkich kroków. Około 5–6 minut. Pytamy o realne zachowania,
            problemy i decyzje — nie o to, czy „AI brzmi ciekawie”. Bez nazwy
            firmy, NIP i bez podawania dokładnych danych finansowych.
          </p>
        </div>
      </section>

      <section className="section surveySection">
        <div className="container surveyLayout">
          <aside>
            <h3>Po co ta ankieta?</h3>
            <ul>
              <li>zrozumieć, jak przedsiębiorcy naprawdę kontrolują finanse,</li>
              <li>poznać problemy, które pojawiają się często i są kosztowne,</li>
              <li>wybrać maksymalnie kilka funkcji do pierwszego MVP,</li>
              <li>osobno ocenić barierę dostępu do banku i KSeF,</li>
              <li>sprawdzić, co musiałoby uzasadniać płatny abonament,</li>
              <li>wybrać osoby zainteresowane testem na realnych danych.</li>
            </ul>
            <p>
              Odpowiedzi będą analizowane zbiorczo. E-mail jest opcjonalny i
              potrzebny wyłącznie wtedy, gdy chcesz otrzymać zaproszenie do
              testów MVP.
            </p>
          </aside>

          <SurveyForm />
        </div>
      </section>
    </>
  );
}
