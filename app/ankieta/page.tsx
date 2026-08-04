import { SurveyForm } from "@/components/SurveyForm";

export const metadata = { title: "Ankieta dla przedsiębiorców" };

export default function SurveyPage(){return <>
  <section className="pageHero surveyHero"><div className="container narrow"><span className="eyebrow">Badanie potrzeb przedsiębiorców</span><h1>Pomóż zbudować narzędzie, którego naprawdę warto używać</h1><p>4 krótkie kroki. Około 4 minut. Bez pytań o nazwę firmy, NIP ani dane finansowe w dokładnych kwotach.</p></div></section>
  <section className="section surveySection"><div className="container surveyLayout"><aside><h3>Do czego użyję odpowiedzi?</h3><ul><li>ustalenie funkcji „must have”</li><li>ocena bariery dostępu do banku i KSeF</li><li>dobór modelu cenowego</li><li>wybór grupy do testów MVP</li></ul><p>Odpowiedzi będą analizowane zbiorczo. E-mail jest opcjonalny.</p></aside><SurveyForm /></div></section>
</>}
