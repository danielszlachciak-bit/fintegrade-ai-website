import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="fintegrade.ai — strona główna">
      <span className="logoMark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>fintegrade<span>.ai</span></span>
    </Link>
  );
}
