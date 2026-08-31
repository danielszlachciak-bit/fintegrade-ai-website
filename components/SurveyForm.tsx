"use client";

import { FormEvent, useMemo, useState } from "react";
import { TurnstileWidget } from "./TurnstileWidget";
import styles from "./SurveyForm.module.css";

const financePainOptions = [
  "Brak pewności, ile naprawdę zarabiam",
  "Problemy z płynnością i terminami płatności",
  "Podatki i zobowiązania zaskakują",
  "Nie wiem, które koszty rosną za szybko",
  "Brakuje prostych prognoz i scenariuszy",
  "Dane są rozproszone między bankiem, księgowością i Excelami",
  "Trudno mi ocenić konsekwencje decyzji przed ich podjęciem",
  "Należności i opóźnione płatności klientów",
] as const;

const mustHaveOptions = [
  "Bieżąca płynność i alerty",
  "Prognoza podatków i ZUS",
  "Wynik i rentowność firmy",
  "Analiza kosztów",
  "Rentowność klientów / produktów / usług",
  "Monitoring należności i opóźnień",
  "Scenariusze: co się stanie, jeśli…",
  "Rekomendacje AI prostym językiem",
  "Porównanie do poprzednich okresów",
  "Lista decyzji na dziś / tydzień",
] as const;

const financeMethodOptions = [
  "Patrzę głównie na saldo i historię rachunku bankowego",
  "Pytam księgową / biuro rachunkowe",
  "Prowadzę własny Excel / arkusz",
  "Korzystam z raportów programu księgowego / ERP",
  "Mam wewnętrzne raporty lub controlling",
  "Oceniam sytuację głównie intuicyjnie",
  "Właściwie nie analizuję finansów regularnie",
] as const;

const dataConcernOptions = [
  "Wyciek danych lub cyberatak",
  "Nieuprawniony dostęp do rachunku lub KSeF",
  "Błędne rekomendacje AI",
  "Brak jasności, jakie dane system faktycznie widzi",
  "Zbyt skomplikowane wdrożenie lub konfiguracja",
  "Uzależnienie od zewnętrznego dostawcy",
  "Nie mam istotnych obaw",
] as const;

const initial = {
  companySize: "",
  monthlyRevenue: "",
  industry: "",
  customerModel: "",
  bookkeeping: "",

  currentFinanceMethod: [] as string[],
  financeTime: "",

  financePain: [] as string[],
  primaryPain: "",
  painFrequency: "",
  currentWorkaround: "",

  mustHave: [] as string[],
  decisionChallenge: "",
  missingFeature: "",

  bankAccess: "",
  ksefAccess: "",
  dataConcerns: [] as string[],

  willingnessToPay: "",
  valueTrigger: "",
  pilotIntent: "",

  email: "",
  privacyAcknowledged: false,
  mvpConsent: false,
  website: "",
};

type MultiField =
  | "currentFinanceMethod"
  | "financePain"
  | "mustHave"
  | "dataConcerns";

export function SurveyForm() {
  const [form, setForm] = useState(initial);
  const [step, setStep] = useState(1);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const totalSteps = 6;

  const progress = useMemo(
    () => `${Math.round((step / totalSteps) * 100)}%`,
    [step]
  );

  function toggle(field: MultiField, value: string, max?: number) {
    setForm((prev) => {
      const current = prev[field];

      if (current.includes(value)) {
        const next = current.filter((item) => item !== value);

        if (field === "financePain" && prev.primaryPain === value) {
          return {
            ...prev,
            [field]: next,
            primaryPain: "",
          };
        }

        return {
          ...prev,
          [field]: next,
        };
      }

      if (typeof max === "number" && current.length >= max) {
        return prev;
      }

      return {
        ...prev,
        [field]: [...current, value],
      };
    });
  }

  function toggleConcern(value: string) {
    const noConcern = "Nie mam istotnych obaw";

    setForm((prev) => {
      const current = prev.dataConcerns;

      if (current.includes(value)) {
        return {
          ...prev,
          dataConcerns: current.filter((item) => item !== value),
        };
      }

      if (value === noConcern) {
        return {
          ...prev,
          dataConcerns: [noConcern],
        };
      }

      const withoutNoConcern = current.filter((item) => item !== noConcern);

      if (withoutNoConcern.length >= 3) {
        return prev;
      }

      return {
        ...prev,
        dataConcerns: [...withoutNoConcern, value],
      };
    });
  }

  const canContinue =
    step === 1
      ? Boolean(
          form.companySize &&
            form.monthlyRevenue &&
            form.industry &&
            form.customerModel &&
            form.bookkeeping
        )
      : step === 2
        ? Boolean(form.currentFinanceMethod.length > 0 && form.financeTime)
        : step === 3
          ? Boolean(
              form.financePain.length > 0 &&
                form.primaryPain &&
                form.painFrequency
            )
          : step === 4
            ? form.mustHave.length > 0 && form.mustHave.length <= 3
            : step === 5
              ? Boolean(
                  form.bankAccess &&
                    form.ksefAccess &&
                    form.dataConcerns.length > 0
                )
              : true;

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    if (!form.privacyAcknowledged) {
      setStatus("error");
      setErrorMessage(
        "Przed wysłaniem ankiety potwierdź zapoznanie się z Polityką prywatności."
      );
      return;
    }

    if (form.mvpConsent && !form.email.trim()) {
      setStatus("error");
      setErrorMessage(
        "Aby otrzymać zaproszenie do testów MVP, podaj adres e-mail."
      );
      return;
    }

    if (!form.willingnessToPay || !form.pilotIntent) {
      setStatus("error");
      setErrorMessage("Uzupełnij odpowiedzi dotyczące abonamentu i testów MVP.");
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage("Poczekaj na zakończenie weryfikacji bezpieczeństwa.");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const responseBody = await response.json().catch(() => null);

        console.error("survey_form_error", {
          status: response.status,
          response: responseBody,
        });

        setStatus("error");
        setErrorMessage(
          "Nie udało się zapisać odpowiedzi. Sprawdź pola i spróbuj ponownie."
        );
        return;
      }

      setForm(initial);
      setTurnstileToken("");
      setStep(1);
      setStatus("success");
    } catch (error) {
      console.error("survey_request_failed", error);

      setStatus("error");
      setErrorMessage("Nie udało się połączyć z serwerem. Spróbuj ponownie.");
    }
  }

  if (status === "success") {
    return (
      <div className="successPanel">
        <div>✓</div>
        <h2>Dziękuję za konkretny głos.</h2>
        <p>
          Odpowiedź została zapisana. Najważniejsze są dla mnie nie deklaracje,
          że „AI brzmi ciekawie”, lecz sposób, w jaki dziś naprawdę zarządzasz
          finansami, problemy, które powtarzają się w firmie, oraz warunki, przy
          których nowe narzędzie miałoby dla Ciebie realną wartość.
        </p>
      </div>
    );
  }

  return (
    <form className="surveyForm" onSubmit={submit}>
      <div className="formProgress" aria-hidden="true">
        <span style={{ width: progress }} />
      </div>

      <div className="stepLabel">
        Krok {step} z {totalSteps}
      </div>

      {step === 1 && (
        <fieldset>
          <legend>O Twojej firmie</legend>
          <p className="formLead">
            Kilka informacji pozwoli mi odróżnić potrzeby różnych typów firm.
            Nie pytam o nazwę firmy, NIP ani dokładne dane finansowe.
          </p>

          <label>
            Wielkość firmy
            <select
              required
              value={form.companySize}
              onChange={(e) =>
                setForm({ ...form, companySize: e.target.value })
              }
            >
              <option value="">Wybierz</option>
              <option>JDG bez pracowników</option>
              <option>Mikrofirma 1–9 osób</option>
              <option>Mała firma 10–49 osób</option>
              <option>50+ osób</option>
            </select>
          </label>

          <label>
            Miesięczny przychód
            <select
              required
              value={form.monthlyRevenue}
              onChange={(e) =>
                setForm({ ...form, monthlyRevenue: e.target.value })
              }
            >
              <option value="">Wybierz przedział</option>
              <option>poniżej 10 tys. zł</option>
              <option>10–30 tys. zł</option>
              <option>30–70 tys. zł</option>
              <option>70–200 tys. zł</option>
              <option>200–500 tys. zł</option>
              <option>powyżej 500 tys. zł</option>
            </select>
          </label>

          <label>
            Branża
            <select
              required
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
            >
              <option value="">Wybierz</option>
              <option>Usługi profesjonalne / B2B</option>
              <option>Handel detaliczny / e-commerce</option>
              <option>Handel hurtowy / dystrybucja</option>
              <option>Produkcja</option>
              <option>Budownictwo / instalacje</option>
              <option>Transport / logistyka</option>
              <option>Gastronomia / hotelarstwo</option>
              <option>Zdrowie / uroda / wellbeing</option>
              <option>IT / software / marketing</option>
              <option>Inna</option>
            </select>
          </label>

          <label>
            Główny model sprzedaży
            <select
              required
              value={form.customerModel}
              onChange={(e) =>
                setForm({ ...form, customerModel: e.target.value })
              }
            >
              <option value="">Wybierz</option>
              <option>Głównie B2B</option>
              <option>Głównie B2C</option>
              <option>Mieszany B2B / B2C</option>
            </select>
          </label>

          <label>
            Jak prowadzona jest księgowość?
            <select
              required
              value={form.bookkeeping}
              onChange={(e) =>
                setForm({ ...form, bookkeeping: e.target.value })
              }
            >
              <option value="">Wybierz</option>
              <option>Zewnętrzne biuro rachunkowe</option>
              <option>Samodzielnie</option>
              <option>Wewnętrzna księgowość / księgowy</option>
              <option>Model mieszany</option>
            </select>
          </label>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend>Jak zarządzasz finansami dzisiaj?</legend>
          <p className="formLead">
            Interesuje mnie to, co robisz faktycznie — nie to, jak „powinno” to
            wyglądać. Możesz zaznaczyć kilka odpowiedzi.
          </p>

          <p className="fieldTitle">Jak dziś sprawdzasz sytuację finansową firmy?</p>
          <div className="checkGrid">
            {financeMethodOptions.map((item) => (
              <label className="checkCard" key={item}>
                <input
                  type="checkbox"
                  checked={form.currentFinanceMethod.includes(item)}
                  onChange={() => toggle("currentFinanceMethod", item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <label className={styles.spacingTop}>
            Ile czasu miesięcznie poświęcasz na sprawdzanie wyniku, płynności,
            kosztów lub przygotowanie własnych zestawień?
            <select
              required
              value={form.financeTime}
              onChange={(e) =>
                setForm({ ...form, financeTime: e.target.value })
              }
            >
              <option value="">Wybierz</option>
              <option>do 30 minut</option>
              <option>30 minut – 2 godziny</option>
              <option>2–5 godzin</option>
              <option>5–10 godzin</option>
              <option>powyżej 10 godzin</option>
              <option>Trudno powiedzieć</option>
            </select>
          </label>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend>Co naprawdę jest problemem?</legend>
          <p className="formLead">
            Zaznacz maksymalnie 4 problemy, które rzeczywiście pojawiają się w
            Twojej firmie. Potem wskaż jeden najważniejszy.
          </p>

          <div className={styles.selectionCounter}>
            Wybrano {form.financePain.length}/4
          </div>

          <div className="checkGrid">
            {financePainOptions.map((item) => (
              <label className="checkCard" key={item}>
                <input
                  type="checkbox"
                  checked={form.financePain.includes(item)}
                  disabled={
                    !form.financePain.includes(item) && form.financePain.length >= 4
                  }
                  onChange={() => toggle("financePain", item, 4)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <label className={styles.spacingTop}>
            Który z wybranych problemów jest dziś najważniejszy?
            <select
              required
              value={form.primaryPain}
              onChange={(e) =>
                setForm({ ...form, primaryPain: e.target.value })
              }
            >
              <option value="">Wybierz jeden</option>
              {form.financePain.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>

          <label>
            Jak często ten problem realnie się pojawia?
            <select
              required
              value={form.painFrequency}
              onChange={(e) =>
                setForm({ ...form, painFrequency: e.target.value })
              }
            >
              <option value="">Wybierz</option>
              <option>Co tydzień lub częściej</option>
              <option>Kilka razy w miesiącu</option>
              <option>Około raz w miesiącu</option>
              <option>Raz na kwartał</option>
              <option>Rzadziej</option>
              <option>Trudno powiedzieć</option>
            </select>
          </label>

          <label>
            Jak sobie z tym dziś radzisz? <span className={styles.optionalLabel}>(opcjonalnie)</span>
            <textarea
              className={styles.textarea}
              rows={4}
              maxLength={600}
              value={form.currentWorkaround}
              onChange={(e) =>
                setForm({ ...form, currentWorkaround: e.target.value })
              }
              placeholder="Np. pytam księgową, robię własny Excel, patrzę na konto, odkładam decyzję…"
            />
          </label>
        </fieldset>
      )}

      {step === 4 && (
        <fieldset>
          <legend>Co pierwsza wersja naprawdę musi umieć?</legend>
          <p className="formLead">
            Gdyby MVP mogło mieć tylko 3 funkcje, które wybierasz? To pytanie
            wymusza priorytety — maksymalnie 3 odpowiedzi.
          </p>

          <div className={styles.selectionCounter}>Wybrano {form.mustHave.length}/3</div>

          <div className="checkGrid">
            {mustHaveOptions.map((item) => (
              <label className="checkCard" key={item}>
                <input
                  type="checkbox"
                  checked={form.mustHave.includes(item)}
                  disabled={!form.mustHave.includes(item) && form.mustHave.length >= 3}
                  onChange={() => toggle("mustHave", item, 3)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          <label className={styles.spacingTop}>
            Jaką decyzję finansową było Ci najtrudniej podjąć w ostatnich 6
            miesiącach? <span className={styles.optionalLabel}>(opcjonalnie)</span>
            <textarea
              className={styles.textarea}
              rows={4}
              maxLength={700}
              value={form.decisionChallenge}
              onChange={(e) =>
                setForm({ ...form, decisionChallenge: e.target.value })
              }
              placeholder="Np. zatrudnienie pracownika, podniesienie ceny, leasing, inwestycja, duży kontrakt…"
            />
          </label>

          <label>
            Czego brakuje na powyższej liście? <span className={styles.optionalLabel}>(opcjonalnie)</span>
            <textarea
              className={styles.textarea}
              rows={3}
              maxLength={500}
              value={form.missingFeature}
              onChange={(e) =>
                setForm({ ...form, missingFeature: e.target.value })
              }
              placeholder="Funkcja lub informacja, za którą naprawdę był(a)byś gotowy/a zapłacić."
            />
          </label>
        </fieldset>
      )}

      {step === 5 && (
        <fieldset>
          <legend>Dane potrzebne do pełnego wykorzystania aplikacji</legend>
          <p className="formLead">
            W jakim stopniu jesteś gotowy/a udostępnić aplikacji fintegrade.ai
            poniższe dane, aby mogła w pełni analizować sytuację firmy i
            przygotowywać trafniejsze alerty, prognozy oraz rekomendacje?
            Pytamy osobno o rachunek bankowy i KSeF. W przypadku automatycznej
            integracji zakładamy wyłącznie dostęp do odczytu — bez możliwości
            wykonywania przelewów, wystawiania faktur ani modyfikowania danych.
            W tej ankiecie nie przekazujesz żadnych danych finansowych.
          </p>

          <label>
            Rachunek bankowy firmy — jaki sposób dostępu byłby dla Ciebie akceptowalny?
            <select
              required
              value={form.bankAccess}
              onChange={(e) => setForm({ ...form, bankAccess: e.target.value })}
            >
              <option value="">Wybierz</option>
              <option>Automatyczny dostęp tylko do odczytu</option>
              <option>Wolę samodzielnie wgrywać wyciąg / plik</option>
              <option>Najchętniej przez biuro księgowe / zaufanego integratora</option>
              <option>Nie wiem — najpierw potrzebuję wyjaśnienia bezpieczeństwa</option>
              <option>Nie udostępnię danych rachunku</option>
            </select>
          </label>

          <label>
            Dane z KSeF / faktury — jaki sposób dostępu byłby dla Ciebie akceptowalny?
            <select
              required
              value={form.ksefAccess}
              onChange={(e) => setForm({ ...form, ksefAccess: e.target.value })}
            >
              <option value="">Wybierz</option>
              <option>Automatyczna integracja tylko do odczytu</option>
              <option>Wolę samodzielnie wgrywać eksport / pliki</option>
              <option>Najchętniej przez biuro księgowe / zaufanego integratora</option>
              <option>Nie wiem — najpierw potrzebuję wyjaśnienia bezpieczeństwa</option>
              <option>Nie udostępnię danych z KSeF / faktur</option>
            </select>
          </label>

          <p className="fieldTitle">
            Co budzi największe obawy? Wybierz maksymalnie 3 odpowiedzi.
          </p>
          <div className={styles.selectionCounter}>Wybrano {form.dataConcerns.length}/3</div>

          <div className="checkGrid">
            {dataConcernOptions.map((item) => {
              const isNone = item === "Nie mam istotnych obaw";
              const isChecked = form.dataConcerns.includes(item);
              const disabled =
                !isChecked &&
                !isNone &&
                !form.dataConcerns.includes("Nie mam istotnych obaw") &&
                form.dataConcerns.length >= 3;

              return (
                <label className="checkCard" key={item}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    disabled={disabled}
                    onChange={() => toggleConcern(item)}
                  />
                  <span>{item}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      )}

      {step === 6 && (
        <fieldset>
          <legend>Wartość i możliwość dalszego testu</legend>

          <label>
            Jaki miesięczny abonament byłby akceptowalny, jeśli aplikacja
            rozwiązywałaby najważniejsze wskazane przez Ciebie problemy?
            <select
              required
              value={form.willingnessToPay}
              onChange={(e) =>
                setForm({ ...form, willingnessToPay: e.target.value })
              }
            >
              <option value="">Wybierz</option>
              <option>0 zł — tylko wersja bezpłatna</option>
              <option>do 49 zł</option>
              <option>50–99 zł</option>
              <option>100–199 zł</option>
              <option>200–399 zł</option>
              <option>400 zł lub więcej</option>
            </select>
          </label>

          <label>
            Co aplikacja musiałaby zrobić dla Twojej firmy, żeby miesięczny
            abonament był oczywistym wydatkiem?{" "}
            <span className={styles.optionalLabel}>(opcjonalnie, ale bardzo pomocne)</span>
            <textarea
              className={styles.textarea}
              rows={4}
              maxLength={700}
              value={form.valueTrigger}
              onChange={(e) => setForm({ ...form, valueTrigger: e.target.value })}
              placeholder="Np. ostrzec mnie 4 tygodnie wcześniej o braku gotówki, pokazać realny zysk, oszczędzić 3 godziny miesięcznie…"
            />
          </label>

          <label>
            Czy był(a)byś gotowy/a przetestować pierwszą wersję na danych swojej
            firmy?
            <select
              required
              value={form.pilotIntent}
              onChange={(e) => setForm({ ...form, pilotIntent: e.target.value })}
            >
              <option value="">Wybierz</option>
              <option>Tak — chętnie przetestuję na własnych danych</option>
              <option>Może — zależy od zakresu i bezpieczeństwa</option>
              <option>Najpierw chcę zobaczyć gotową wersję MVP / więcej informacji</option>
              <option>Nie na tym etapie</option>
            </select>
          </label>

          <label>
            E-mail <span className={styles.optionalLabel}>(opcjonalnie)</span>
            <input
              type="email"
              value={form.email}
              required={form.mvpConsent}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="np. imie@firma.pl"
              autoComplete="email"
            />
          </label>

          <p className="formLead">
            E-mail nie jest potrzebny do zapisania odpowiedzi. Podaj go tylko,
            jeśli chcesz otrzymać zaproszenie do testów MVP.
          </p>

          <label className="honeypot" aria-hidden="true">
            Strona internetowa
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />
          </label>

          <label className="consent">
            <input
              type="checkbox"
              required
              checked={form.privacyAcknowledged}
              onChange={(e) =>
                setForm({ ...form, privacyAcknowledged: e.target.checked })
              }
            />
            <span>
              Potwierdzam, że zapoznałem/am się z{" "}
              <a
                href="/polityka-prywatnosci"
                target="_blank"
                rel="noreferrer"
              >
                Polityką prywatności
              </a>
              , w tym z informacją o sposobie wykorzystania odpowiedzi
              ankietowych.
            </span>
          </label>

          <label className="consent">
            <input
              type="checkbox"
              checked={form.mvpConsent}
              onChange={(e) => setForm({ ...form, mvpConsent: e.target.checked })}
            />
            <span>
              Chcę otrzymać na podany adres e-mail zaproszenie do testów MVP
              fintegrade.ai. Zgoda jest dobrowolna i mogę ją w każdej chwili
              wycofać, pisząc na{" "}
              <a href="mailto:kontakt@fintegrade.ai">kontakt@fintegrade.ai</a>.
            </span>
          </label>

          <TurnstileWidget onToken={setTurnstileToken} />
        </fieldset>
      )}

      <div className="formActions">
        {step > 1 && (
          <button
            type="button"
            className="button secondary"
            onClick={() => {
              setStatus("idle");
              setErrorMessage("");
              setStep(step - 1);
            }}
          >
            Wstecz
          </button>
        )}

        {step < totalSteps ? (
          <button
            type="button"
            className="button primary"
            disabled={!canContinue}
            onClick={() => {
              setStatus("idle");
              setErrorMessage("");
              setStep(step + 1);
            }}
          >
            Dalej
          </button>
        ) : (
          <button
            className="button primary"
            disabled={
              status === "sending" ||
              !form.privacyAcknowledged ||
              !form.willingnessToPay ||
              !form.pilotIntent ||
              !turnstileToken
            }
          >
            {status === "sending" ? "Zapisuję…" : "Wyślij odpowiedź"}
          </button>
        )}
      </div>

      {status === "error" && (
        <p className="errorMessage" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
