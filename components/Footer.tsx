import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <Logo />
          <p>Finanse zarządcze, controlling i AI — od danych do lepiej uzasadnionych decyzji.</p>
        </div>
        <div>
          <strong>Dwa obszary</strong>
          <Link href="/digital-twin">Digital Twin dla mikrofirm</Link>
          <Link href="/ankieta">Ankieta przedsiębiorców</Link>
          <Link href="/controlling-ai">Controlling × AI</Link>
        </div>
        <div>
          <strong>Wiedza i zaufanie</strong>
          <Link href="/wiedza">Wiedza</Link>
          <Link href="/bezpieczenstwo">Bezpieczeństwo</Link>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/regulamin">Regulamin</Link>
        </div>
        <div>
          <strong>Kontakt</strong>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <Link href="/kontakt">Formularz kontaktowy</Link>
          <Link href="/o-mnie">O mnie</Link>
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
