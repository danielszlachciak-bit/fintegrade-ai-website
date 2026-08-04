import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Logo />
          <p>Finanse firmy zamienione w prostsze, szybsze i lepiej uzasadnione decyzje.</p>
        </div>
        <div>
          <strong>Projekt</strong>
          <Link href="/digital-twin">Digital Twin</Link>
          <Link href="/mvp">Demo aplikacji</Link>
          <Link href="/ankieta">Ankieta przedsiębiorców</Link>
        </div>
        <div>
          <strong>Zaufanie</strong>
          <Link href="/bezpieczenstwo">Bezpieczeństwo</Link>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/regulamin">Regulamin</Link>
        </div>
        <div>
          <strong>Kontakt</strong>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/kontakt">Formularz kontaktowy</Link>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} fintegrade.ai</span>
        <span>AI wspiera decyzję. Odpowiedzialność pozostaje po stronie człowieka.</span>
      </div>
    </footer>
  );
}
