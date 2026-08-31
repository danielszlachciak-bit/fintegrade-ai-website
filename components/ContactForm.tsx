"use client";

import { FormEvent, useState } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!token) {
      setStatus("error");
      setErrorMessage("Poczekaj na zakończenie weryfikacji bezpieczeństwa.");
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const privacyAcknowledged = formData.get("privacyAcknowledged") === "true";

    if (!privacyAcknowledged) {
      setStatus("error");
      setErrorMessage("Przed wysłaniem wiadomości potwierdź zapoznanie się z Polityką prywatności.");
      return;
    }

    const requestBody = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      topic: String(formData.get("topic") ?? ""),
      message: String(formData.get("message") ?? ""),
      privacyAcknowledged,
      website: String(formData.get("website") ?? ""),
      turnstileToken: token,
    };

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const responseBody = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("contact_form_error", {
          status: response.status,
          response: responseBody,
        });

        setStatus("error");

        if (response.status === 400) {
          setErrorMessage("Sprawdź poprawność wszystkich pól formularza.");
        } else if (response.status === 403) {
          setErrorMessage("Weryfikacja bezpieczeństwa wygasła. Odśwież stronę i spróbuj ponownie.");
        } else {
          setErrorMessage("Wiadomość nie została zapisana. Spróbuj ponownie.");
        }

        return;
      }

      formElement.reset();
      setToken("");
      setStatus("success");
    } catch (error) {
      console.error("contact_request_failed", error);
      setStatus("error");
      setErrorMessage("Nie udało się połączyć z serwerem. Spróbuj ponownie.");
    }
  }

  if (status === "success") {
    return (
      <div className="successPanel compact">
        <div>✓</div>
        <h2>Wiadomość została wysłana.</h2>
        <p>Dziękuję za kontakt. Odpowiem na podany adres e-mail.</p>
      </div>
    );
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <label>
        Imię
        <input required name="name" minLength={2} maxLength={80} autoComplete="name" />
      </label>

      <label>
        E-mail
        <input required type="email" name="email" maxLength={160} autoComplete="email" />
      </label>

      <label>
        Firma / rola
        <input name="company" maxLength={160} autoComplete="organization" />
      </label>

      <label>
        Czego dotyczy kontakt?
        <select required name="topic" defaultValue="">
          <option value="" disabled>Wybierz temat</option>
          <option value="micro_product">fintegrade.ai dla mikro i małych firm</option>
          <option value="controlling_ai">Controlling i AI dla firmy</option>
          <option value="partnership">Współpraca / partnerstwo</option>
          <option value="other">Inny temat</option>
        </select>
      </label>

      <label>
        W czym mogę pomóc?
        <textarea required name="message" rows={6} minLength={10} maxLength={2500} />
      </label>

      <label className="honeypot" aria-hidden="true">
        Strona
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <label className="consent">
        <input required type="checkbox" name="privacyAcknowledged" value="true" />
        <span>
          Potwierdzam, że zapoznałem/am się z{" "}
          <a href="/polityka-prywatnosci" target="_blank" rel="noreferrer">
            Polityką prywatności
          </a>
          , w tym z informacją o zasadach przetwarzania danych przekazanych w formularzu kontaktowym.
        </span>
      </label>

      <TurnstileWidget
        onToken={(newToken) => {
          setToken(newToken);
          if (newToken) {
            setErrorMessage("");
            setStatus("idle");
          }
        }}
      />

      <button className="button primary" type="submit" disabled={status === "sending" || !token}>
        {status === "sending" ? "Wysyłam…" : token ? "Wyślij wiadomość" : "Czekam na weryfikację…"}
      </button>

      {status === "error" && <p className="errorMessage" role="alert">{errorMessage}</p>}
    </form>
  );
}
