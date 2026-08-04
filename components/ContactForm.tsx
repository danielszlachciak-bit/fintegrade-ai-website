"use client";

import { FormEvent, useState } from "react";
import { TurnstileWidget } from "./TurnstileWidget";

export function ContactForm() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("idle");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const formElement = e.currentTarget;
    const data = Object.fromEntries(new FormData(formElement));
    const response = await fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({...data, turnstileToken:token}) });
    setStatus(response.ok ? "success" : "error");
    if (response.ok) formElement.reset();
  }

  if (status === "success") return <div className="successPanel compact"><div>✓</div><h2>Wiadomość zapisana.</h2><p>Odpowiem na podany adres e-mail.</p></div>;

  return <form className="contactForm" onSubmit={submit}>
    <label>Imię<input required name="name" maxLength={80} autoComplete="name" /></label>
    <label>E-mail<input required type="email" name="email" maxLength={160} autoComplete="email" /></label>
    <label>Firma / rola<input name="company" maxLength={160} /></label>
    <label>W czym mogę pomóc?<textarea required name="message" rows={6} maxLength={2500} /></label>
    <label className="honeypot" aria-hidden="true">Strona<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className="consent"><input required type="checkbox" name="consent" value="true" /><span>Akceptuję przetwarzanie danych w celu odpowiedzi na wiadomość zgodnie z <a href="/polityka-prywatnosci" target="_blank">polityką prywatności</a>.</span></label>
    <TurnstileWidget onToken={setToken} />
    <button className="button primary" disabled={status === "sending"}>{status === "sending" ? "Wysyłam…" : "Wyślij wiadomość"}</button>
    {status === "error" && <p className="errorMessage">Wiadomość nie została zapisana. Spróbuj ponownie.</p>}
  </form>;
}
