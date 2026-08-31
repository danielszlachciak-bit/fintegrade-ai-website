import Link from "next/link";
import { Logo } from "./Logo";

const nav = [
  ["Digital Twin", "/digital-twin"],
  ["Controlling × AI", "/controlling-ai"],
  ["Wiedza", "/wiedza"],
  ["Ankieta", "/ankieta"],
  ["O mnie", "/o-mnie"],
] as const;

export function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Logo />
        <nav className="desktopNav" aria-label="Główna nawigacja">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="navCta" href="/kontakt">Porozmawiajmy</Link>
        </nav>
        <details className="mobileMenu">
          <summary aria-label="Otwórz menu"><span /><span /><span /></summary>
          <nav aria-label="Menu mobilne">
            {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/kontakt">Porozmawiajmy</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
