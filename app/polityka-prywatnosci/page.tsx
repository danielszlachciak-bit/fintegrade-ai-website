import Link from "next/link";

export const metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności fintegrade.ai – informacje o przetwarzaniu i ochronie danych osobowych.",
};

const purposes = [
  {
    title: "Ankiety i badanie produktu",
    purpose:
      "Badanie potrzeb mikro i małych przedsiębiorców, walidacja koncepcji fintegrade.ai i ustalanie priorytetów rozwoju produktu.",
    basis:
      "Prawnie uzasadniony interes administratora – art. 6 ust. 1 lit. f RODO.",
    retention:
      "Odpowiedzi ankietowe: maksymalnie 24 miesiące od zakończenia badania.",
  },
  {
    title: "Kontakt i korespondencja",
    purpose:
      "Odpowiedź na wiadomość, prowadzenie korespondencji oraz podjęcie działań na Twoje żądanie.",
    basis:
      "Art. 6 ust. 1 lit. b RODO albo prawnie uzasadniony interes administratora – art. 6 ust. 1 lit. f RODO.",
    retention:
      "Co do zasady 12 miesięcy od zakończenia korespondencji, chyba że dalsze przechowywanie jest uzasadnione współpracą, obowiązkiem prawnym lub ochroną roszczeń.",
  },
  {
    title: "Zaproszenie do testów MVP",
    purpose:
      "Kontakt z osobami, które dobrowolnie zadeklarują zainteresowanie testowaniem rozwijanej aplikacji.",
    basis:
      "Zgoda – art. 6 ust. 1 lit. a RODO.",
    retention:
      "Do wycofania zgody, nie dłużej jednak niż 24 miesiące od jej udzielenia, jeśli wcześniej nie dojdzie do dalszej współpracy.",
  },
  {
    title: "Bezpieczeństwo strony",
    purpose:
      "Zapobieganie nadużyciom, wykrywanie błędów, zabezpieczanie formularzy i infrastruktury.",
    basis:
      "Prawnie uzasadniony interes administratora – art. 6 ust. 1 lit. f RODO.",
    retention:
      "Przez okres niezbędny do zapewnienia bezpieczeństwa i diagnostyki, możliwie krótki.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* HERO */}
      <section className="pageHero">
        <div className="container narrow">
          <span className="eyebrow">PRYWATNOŚĆ I DANE</span>

          <h1>Polityka prywatności fintegrade.ai</h1>

          <p>
            Chcemy jasno wyjaśniać, jakie dane wykorzystujemy, po co ich
            potrzebujemy, jak długo je przechowujemy i jakie prawa przysługują
            osobom korzystającym z fintegrade.ai.
          </p>

          <p>
            <strong>Ostatnia aktualizacja: 21 sierpnia 2026 r.</strong>
          </p>
        </div>
      </section>

      {/* W SKRÓCIE */}
      <section className="section">
        <div className="container">
          <div className="securityGrid">
            <article>
              <span>01</span>
              <h3>Administrator</h3>
              <p>
                Daniel Szlachciak
                <br />
                <a href="mailto:kontakt@fintegrade.ai">
                  kontakt@fintegrade.ai
                </a>
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Minimalizacja danych</h3>
              <p>
                Zbieramy wyłącznie informacje potrzebne do realizacji
                określonego celu. E-mail w ankiecie jest opcjonalny.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Obecny zakres</h3>
              <p>
                Publiczna strona nie służy obecnie do przekazywania danych
                rachunków bankowych ani danych KSeF.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ADMINISTRATOR */}
      <section className="section soft">
        <div className="container narrow">
          <span className="eyebrow">01 — ADMINISTRATOR</span>

          <h2>Kto odpowiada za Twoje dane?</h2>

          <p>
            Administratorem danych osobowych przetwarzanych za pośrednictwem
            fintegrade.ai jest obecnie:
          </p>

          <p className="largeText">
            <strong>Daniel Szlachciak</strong>
            <br />
            e-mail:{" "}
            <a href="mailto:kontakt@fintegrade.ai">
              kontakt@fintegrade.ai
            </a>
          </p>

          <p>
            Po rozpoczęciu prowadzenia działalności gospodarczej oznaczenie
            administratora zostanie zaktualizowane o firmę, NIP, REGON i adres
            działalności.
          </p>

          <p>
            W każdej sprawie dotyczącej prywatności lub przetwarzania danych
            możesz napisać na{" "}
            <a href="mailto:kontakt@fintegrade.ai">
              kontakt@fintegrade.ai
            </a>
            .
          </p>
        </div>
      </section>

      {/* JAKIE DANE */}
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">02 — ZAKRES DANYCH</span>

          <h2>Jakie informacje możemy przetwarzać?</h2>

          <p>
            Zakres danych zależy od sposobu korzystania ze strony. Możemy
            przetwarzać przede wszystkim:
          </p>

          <ul>
            <li>odpowiedzi udzielone w ankietach;</li>
            <li>
              adres e-mail, jeżeli zostanie dobrowolnie podany w ankiecie;
            </li>
            <li>
              imię, adres e-mail, nazwę firmy, wybrany temat kontaktu oraz treść
              wiadomości przesłanej przez formularz kontaktowy;
            </li>
            <li>
              informacje o udzielonych zgodach, np. na kontakt dotyczący testów
              MVP;
            </li>
            <li>
              informacje techniczne związane z bezpieczeństwem i działaniem
              strony, takie jak adres IP, czas żądania, informacje o
              przeglądarce i urządzeniu oraz dane techniczne dotyczące
              zdarzeń i błędów.
            </li>
          </ul>

          <p>
            Dane podawane w formularzach otrzymujemy bezpośrednio od Ciebie.
            Część informacji technicznych powstaje automatycznie podczas
            korzystania ze strony.
          </p>

          <p>
            <strong>
              Na obecnym etapie strona fintegrade.ai nie służy do przesyłania
              ani przechowywania danych rachunków bankowych i danych KSeF.
            </strong>
          </p>
        </div>
      </section>

      {/* CELE I PODSTAWY */}
      <section className="section soft">
        <div className="container">
          <div className="container narrow">
            <span className="eyebrow">03 — CELE I PODSTAWY PRAWNE</span>

            <h2>Po co wykorzystujemy dane?</h2>

            <p>
              Nie wykorzystujemy wszystkich danych w ten sam sposób. Cel,
              podstawa prawna i okres przechowywania zależą od kontekstu, w
              którym dane zostały przekazane.
            </p>
          </div>

          <div className="securityGrid">
            {purposes.map((item) => (
              <article key={item.title}>
                <span>✓</span>
                <h3>{item.title}</h3>

                <p>{item.purpose}</p>

                <p>
                  <strong>Podstawa:</strong>
                  <br />
                  {item.basis}
                </p>

                <p>
                  <strong>Okres przechowywania:</strong>
                  <br />
                  {item.retention}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ANKIETA */}
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">04 — ANKIETA</span>

          <h2>Badanie potrzeb przedsiębiorców</h2>

          <p>
            Ankieta fintegrade.ai służy poznaniu problemów i potrzeb mikro i
            małych przedsiębiorców oraz walidacji założeń rozwijanego
            produktu.
          </p>

          <p>
            Odpowiedzi wykorzystujemy m.in. do określania, które funkcje są
            najbardziej potrzebne, jakie bariery mogą ograniczać korzystanie z
            produktu oraz w jaki sposób powinien być rozwijany model usługi.
          </p>

          <p>
            <strong>Podanie adresu e-mail w ankiecie jest dobrowolne.</strong>
          </p>

          <p>
            Jeżeli umożliwimy zapisanie się do testów MVP, kontakt w tym celu
            będzie odbywał się na podstawie odrębnej, dobrowolnej zgody.
          </p>
        </div>
      </section>

      {/* MARKETING */}
      <section className="section soft">
        <div className="container narrow">
          <span className="eyebrow">05 — KOMUNIKACJA</span>

          <h2>Testy MVP i przyszła komunikacja marketingowa</h2>

          <p>
            Zgoda na kontakt dotyczący testów MVP lub przyszłą komunikację
            marketingową nie jest warunkiem wypełnienia ankiety ani
            skorzystania z formularza kontaktowego.
          </p>

          <p>
            Jeżeli w przyszłości będziemy wysyłać informacje o rozwoju
            fintegrade.ai, materiałach edukacyjnych lub ofercie drogą
            elektroniczną, komunikacja taka będzie prowadzona po uzyskaniu
            wymaganej zgody.
          </p>

          <p>
            Zgodę można wycofać w dowolnym momencie poprzez wiadomość na{" "}
            <a href="mailto:kontakt@fintegrade.ai">
              kontakt@fintegrade.ai
            </a>
            .
          </p>

          <p>
            Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania
            dokonanego przed jej wycofaniem.
          </p>
        </div>
      </section>

      {/* DOSTAWCY */}
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">06 — INFRASTRUKTURA</span>

          <h2>Kto może mieć dostęp do danych?</h2>

          <p>
            Korzystamy z zewnętrznych dostawców technologii potrzebnych do
            działania i zabezpieczenia serwisu. W zależności od zakresu
            świadczonej usługi dane mogą być przetwarzane przez:
          </p>

          <ul>
            <li>
              <strong>Vercel</strong> — hosting i infrastruktura aplikacji;
            </li>

            <li>
              <strong>Supabase</strong> — baza danych; wykorzystywany projekt
              działa w regionie Central EU (Frankfurt);
            </li>

            <li>
              <strong>Cloudflare</strong> — zabezpieczenie formularzy przy
              wykorzystaniu mechanizmu Turnstile;
            </li>

            <li>
              <strong>Microsoft 365</strong> — obsługa poczty elektronicznej i
              korespondencji.
            </li>
          </ul>

          <p>
            Dane mogą być również ujawnione podmiotom świadczącym usługi
            prawne, księgowe lub informatyczne, jeżeli będzie to konieczne, a
            także organom publicznym, jeżeli obowiązek udostępnienia danych
            wynika z przepisów prawa.
          </p>

          <p>
            Dostawcy przetwarzający dane w naszym imieniu są dobierani z
            uwzględnieniem wymagań dotyczących ochrony danych i
            bezpieczeństwa.
          </p>
        </div>
      </section>

      {/* TRANSFERY */}
      <section className="section soft">
        <div className="container narrow">
          <span className="eyebrow">07 — TRANSFERY DANYCH</span>

          <h2>Czy dane mogą być przetwarzane poza EOG?</h2>

          <p>
            Niektórzy dostawcy infrastruktury działają globalnie. Z tego
            względu w określonych sytuacjach dane lub informacje techniczne
            mogą być przetwarzane poza Europejskim Obszarem Gospodarczym.
          </p>

          <p>
            Jeżeli taki transfer występuje, stosowane powinny być mechanizmy
            przewidziane w RODO, takie jak decyzja Komisji Europejskiej
            stwierdzająca odpowiedni poziom ochrony, standardowe klauzule
            umowne lub inne dopuszczalne zabezpieczenia.
          </p>
        </div>
      </section>

      {/* CLOUDFLARE */}
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">08 — OCHRONA PRZED BOTAMI</span>

          <h2>Cloudflare Turnstile</h2>

          <p>
            Formularze fintegrade.ai wykorzystują Cloudflare Turnstile w celu
            ograniczenia automatycznych, niepożądanych i potencjalnie
            szkodliwych zgłoszeń.
          </p>

          <p>
            Mechanizm może analizować informacje techniczne związane z
            przeglądarką i urządzeniem w zakresie potrzebnym do oceny, czy
            żądanie pochodzi od rzeczywistego użytkownika.
          </p>

          <p>
            Turnstile jest wykorzystywany jako element bezpieczeństwa, a nie w
            celu profilowania użytkowników na potrzeby marketingowe
            fintegrade.ai.
          </p>
        </div>
      </section>

      {/* COOKIES */}
      <section className="section soft">
        <div className="container narrow">
          <span className="eyebrow">09 — COOKIES I ANALITYKA</span>

          <h2>Jakich technologii używamy?</h2>

          <p>
            Obecnie fintegrade.ai nie wykorzystuje narzędzi reklamowych ani
            marketingowych służących do profilowania użytkowników.
          </p>

          <p>
            Strona może wykorzystywać technologie niezbędne do zapewnienia
            bezpieczeństwa, transmisji danych i prawidłowego działania
            serwisu.
          </p>

          <p>
            W przyszłości planujemy wdrożenie analityki pozwalającej lepiej
            rozumieć sposób korzystania ze strony. Przed jej uruchomieniem
            ocenimy zakres zbieranych danych i wymagania dotyczące zgody.
          </p>

          <p>
            Technologie analityczne lub marketingowe wymagające zgody nie będą
            uruchamiane przed jej uzyskaniem.
          </p>

          <p>
            Więcej informacji znajduje się w{" "}
            <Link href="/cookies">informacji o cookies</Link>.
          </p>
        </div>
      </section>

      {/* PRAWA */}
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">10 — TWOJE PRAWA</span>

          <h2>Masz kontrolę nad swoimi danymi</h2>

          <p>
            W zależności od podstawy i okoliczności przetwarzania możesz mieć
            prawo do:
          </p>

          <ul>
            <li>dostępu do danych i otrzymania ich kopii;</li>
            <li>sprostowania nieprawidłowych lub nieaktualnych danych;</li>
            <li>usunięcia danych;</li>
            <li>ograniczenia przetwarzania;</li>
            <li>przenoszenia danych w przypadkach przewidzianych RODO;</li>
            <li>
              wniesienia sprzeciwu wobec przetwarzania opartego na prawnie
              uzasadnionym interesie;
            </li>
            <li>
              wycofania zgody w dowolnym momencie, jeśli dane są przetwarzane
              na podstawie zgody.
            </li>
          </ul>

          <p>
            W celu skorzystania z tych praw napisz na{" "}
            <a href="mailto:kontakt@fintegrade.ai">
              kontakt@fintegrade.ai
            </a>
            .
          </p>
        </div>
      </section>

      {/* UODO */}
      <section className="section soft">
        <div className="container narrow">
          <span className="eyebrow">11 — SKARGA</span>

          <h2>Prawo do skargi</h2>

          <p>
            Jeżeli uważasz, że Twoje dane są przetwarzane niezgodnie z
            przepisami, masz prawo wnieść skargę do:
          </p>

          <p className="largeText">
            <strong>Prezesa Urzędu Ochrony Danych Osobowych</strong>
            <br />
            ul. Stanisława Moniuszki 1A
            <br />
            00-014 Warszawa
          </p>
        </div>
      </section>

      {/* AUTOMATYZACJA */}
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">12 — AI I DECYZJE</span>

          <h2>Automatyczne podejmowanie decyzji</h2>

          <p>
            Na obecnym etapie nie podejmujemy wobec użytkowników strony decyzji
            opartych wyłącznie na zautomatyzowanym przetwarzaniu, które
            wywoływałyby skutki prawne lub w podobny sposób istotnie na nich
            wpływały.
          </p>

          <p>
            Założeniem rozwijanej aplikacji fintegrade.ai jest wspieranie
            człowieka w analizie i podejmowaniu decyzji, a nie automatyczne
            przejmowanie odpowiedzialności za decyzje przedsiębiorcy.
          </p>
        </div>
      </section>

      {/* DOBROWOLNOŚĆ */}
      <section className="section soft">
        <div className="container narrow">
          <span className="eyebrow">13 — DOBROWOLNOŚĆ</span>

          <h2>Czy musisz podawać dane?</h2>

          <p>
            Podanie danych w formularzu kontaktowym jest dobrowolne, ale bez
            informacji umożliwiających kontakt możemy nie być w stanie
            odpowiedzieć na wiadomość.
          </p>

          <p>
            Podanie adresu e-mail w ankiecie jest opcjonalne.
          </p>

          <p>
            Zgoda na testy MVP lub przyszłą komunikację marketingową nie jest
            warunkiem udziału w ankiecie.
          </p>
        </div>
      </section>

      {/* ZMIANY */}
      <section className="section">
        <div className="container narrow">
          <span className="eyebrow">14 — ZMIANY POLITYKI</span>

          <h2>Polityka będzie rozwijana razem z fintegrade.ai</h2>

          <p>
            Polityka prywatności może być aktualizowana wraz z rozwojem
            produktu, zmianą dostawców technologicznych, uruchomieniem
            analityki, rozszerzeniem funkcjonalności lub zmianą przepisów.
          </p>

          <p>
            W szczególności przed uruchomieniem funkcji wykorzystujących dane
            bankowe lub KSeF polityka zostanie rozszerzona o szczegółowe
            informacje dotyczące zakresu danych, sposobu dostępu, podstaw
            prawnych i zastosowanych zabezpieczeń.
          </p>

          <p>
            Aktualna wersja polityki będzie zawsze dostępna pod tym adresem
            wraz z datą ostatniej aktualizacji.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container ctaPanel">
          <div>
            <span className="eyebrow light">PYTANIA O PRYWATNOŚĆ</span>

            <h2>Chcesz wiedzieć więcej o swoich danych?</h2>

            <p>
              Napisz do nas. Chcemy odpowiadać na pytania dotyczące prywatności
              w prosty i zrozumiały sposób.
            </p>
          </div>

          <div className="heroActions">
            <a
              className="button white"
              href="mailto:kontakt@fintegrade.ai"
            >
              kontakt@fintegrade.ai
            </a>

            <Link className="button white" href="/bezpieczenstwo">
              Bezpieczeństwo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}