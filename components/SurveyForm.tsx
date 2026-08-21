"use client";

import { FormEvent, useState } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

const initial = {
  companySize: "",
  monthlyRevenue: "",
  financePain: [] as string[],
  dataAccess: "",
  mustHave: [] as string[],
  willingnessToPay: "",
  email: "",
  privacyAcknowledged: false,
  mvpConsent: false,
  website: "",
};

export function SurveyForm() {
  const [form, setForm] = useState(initial);
  const [step, setStep] = useState(1);
  const [turnstileToken, setTurnstileToken] = useState("");

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  const toggle = (
    field: "financePain" | "mustHave",
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((x) => x !== value)
        : [...prev[field], value],
    }));
  };

  const canContinue =
    step === 1
      ? Boolean(form.companySize && form.monthlyRevenue)
      : step === 2
        ? form.financePain.length > 0
        : step === 3
          ? Boolean(form.dataAccess && form.mustHave.length > 0)
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

    if (!turnstileToken) {
      setStatus("error");
      setErrorMessage(
        "Poczekaj na zakończenie weryfikacji bezpieczeństwa."
      );
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
      setStatus("success");
    } catch (error) {
      console.error("survey_request_failed", error);

      setStatus("error");
      setErrorMessage(
        "Nie udało się połączyć z serwerem. Spróbuj ponownie."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="successPanel">
        <div>✓</div>

        <h2>Dziękuję za konkretny głos.</h2>

        <p>
          Odpowiedź została zapisana. Wyniki posłużą do ustalenia,
          które funkcje naprawdę powinny znaleźć się w pierwszej
          wersji fintegrade.ai.
        </p>
      </div>
    );
  }

  return (
    <form className="surveyForm" onSubmit={submit}>
      <div className="formProgress">
        <span style={{ width: `${step * 25}%` }} />
      </div>

      <div className="stepLabel">Krok {step} z 4</div>

      {step === 1 && (
        <fieldset>
          <legend>O Twojej firmie</legend>

          <p className="formLead">
            Tylko minimum potrzebne do właściwej interpretacji odpowiedzi.
          </p>

          <label>
            Wielkość firmy

            <select
              required
              value={form.companySize}
              onChange={(e) =>
                setForm({
                  ...form,
                  companySize: e.target.value,
                })
              }
            >
              <option value="">Wybierz</option>
              <option>JDG bez pracowników</option>
              <option>Mikrofirma 1–9 osób</option>
              <option>Mała firma 10–49 osób</option>
              <option>Inna</option>
            </select>
          </label>

          <label>
            Miesięczny przychód

            <select
              required
              value={form.monthlyRevenue}
              onChange={(e) =>
                setForm({
                  ...form,
                  monthlyRevenue: e.target.value,
                })
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
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend>Co dziś najbardziej boli?</legend>

          <p className="formLead">
            Wybierz obszary, które realnie zabierają czas lub pieniądze.
          </p>

          <div className="checkGrid">
            {[
              "Brak pewności, ile naprawdę zarabiam",
              "Problemy z płynnością i terminami",
              "Podatki i zobowiązania zaskakują",
              "Nie wiem, które koszty rosną za szybko",
              "Brakuje prostych prognoz",
              "Dane są rozproszone między bankiem, księgowością i Excelami",
            ].map((x) => (
              <label className="checkCard" key={x}>
                <input
                  type="checkbox"
                  checked={form.financePain.includes(x)}
                  onChange={() => toggle("financePain", x)}
                />
                <span>{x}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend>Jakie dane i funkcje zaakceptujesz?</legend>

          <label>
            Najwygodniejszy sposób dostarczenia danych

            <select
              required
              value={form.dataAccess}
              onChange={(e) =>
                setForm({
                  ...form,
                  dataAccess: e.target.value,
                })
              }
            >
              <option value="">Wybierz</option>
              <option>
                Automatyczny, tylko do odczytu, dostęp do rachunku i KSeF
              </option>
              <option>
                Samodzielne wgrywanie wyciągów i plików z KSeF
              </option>
              <option>Integracja przez biuro księgowe</option>
              <option>
                Nie wiem — potrzebuję wyjaśnienia bezpieczeństwa
              </option>
              <option>Nie udostępnię takich danych</option>
            </select>
          </label>

          <p className="fieldTitle">Funkcje „must have”</p>

          <div className="checkGrid">
            {[
              "Bieżąca płynność i alerty",
              "Prognoza podatków i ZUS",
              "Wynik i rentowność firmy",
              "Analiza kosztów",
              "Scenariusze: co się stanie, jeśli…",
              "Rekomendacje AI prostym językiem",
              "Porównanie do poprzednich okresów",
              "Lista decyzji na dziś / tydzień",
            ].map((x) => (
              <label className="checkCard" key={x}>
                <input
                  type="checkbox"
                  checked={form.mustHave.includes(x)}
                  onChange={() => toggle("mustHave", x)}
                />
                <span>{x}</span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 4 && (
        <fieldset>
          <legend>Cena i możliwość dalszego kontaktu</legend>

          <label>
            Akceptowalny miesięczny abonament

            <select
              required
              value={form.willingnessToPay}
              onChange={(e) =>
                setForm({
                  ...form,
                  willingnessToPay: e.target.value,
                })
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
            E-mail (opcjonalnie)

            <input
              type="email"
              value={form.email}
              required={form.mvpConsent}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              placeholder="np. imie@firma.pl"
              autoComplete="email"
            />
          </label>

          <p className="formLead">
            E-mail nie jest potrzebny do zapisania odpowiedzi.
            Podaj go tylko wtedy, gdy chcesz, abyśmy mogli się z Tobą skontaktować.
          </p>

          <label className="honeypot" aria-hidden="true">
            Strona internetowa
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) =>
                setForm({
                  ...form,
                  website: e.target.value,
                })
              }
            />
          </label>

          <label className="consent">
            <input
              type="checkbox"
              required
              checked={form.privacyAcknowledged}
              onChange={(e) =>
                setForm({
                  ...form,
                  privacyAcknowledged: e.target.checked,
                })
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
              onChange={(e) =>
                setForm({
                  ...form,
                  mvpConsent: e.target.checked,
                })
              }
            />

            <span>
              Chcę otrzymać na podany adres e-mail zaproszenie do testów MVP
              fintegrade.ai. Zgoda jest dobrowolna i mogę ją w każdej chwili
              wycofać, pisząc na{" "}
              <a href="mailto:kontakt@fintegrade.ai">
                kontakt@fintegrade.ai
              </a>
              .
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
            onClick={() => setStep(step - 1)}
          >
            Wstecz
          </button>
        )}

        {step < 4 ? (
          <button
            type="button"
            className="button primary"
            disabled={!canContinue}
            onClick={() => setStep(step + 1)}
          >
            Dalej
          </button>
        ) : (
          <button
            className="button primary"
            disabled={
              status === "sending" ||
              !form.privacyAcknowledged ||
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