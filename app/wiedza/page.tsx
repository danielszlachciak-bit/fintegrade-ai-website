import Link from "next/link";
import { knowledgeArticles } from "@/lib/knowledge";
import styles from "./knowledge.module.css";

const categoryOrder = [
  "Fundamenty finansów",
  "Płynność i gotówka",
  "Rentowność i sprzedaż",
  "Ludzie i koszty pracy",
  "Cena i podatki"
];

export const metadata = {
  title: "Wiedza | fintegrade.ai",
  description:
    "Praktyczna wiedza finansowa dla mikro i małych przedsiębiorców: płynność, rentowność, marża, koszty, VAT i decyzje biznesowe prostym językiem."
};

export default function KnowledgePage() {
  const featured = knowledgeArticles.slice(0, 3);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>WIEDZA DLA PRZEDSIĘBIORCY</p>
          <h1 className={styles.heroTitle}>
            Finanse firmy bez księgowego żargonu.
          </h1>
          <p className={styles.heroLead}>
            Krótkie, praktyczne wyjaśnienia pojęć, które pomagają lepiej rozumieć
            własny biznes i podejmować decyzje na podstawie liczb — nawet jeśli
            finanse nie są Twoją specjalnością.
          </p>
          <div className={styles.heroPrinciples} aria-label="Jak piszemy">
            <span>prosty język</span>
            <span>konkretne przykłady</span>
            <span>bez teorii dla samej teorii</span>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>NA DOBRY POCZĄTEK</p>
              <h2>Trzy rzeczy, które warto zrozumieć najpierw</h2>
            </div>
            <p>
              To fundamenty. Bez nich łatwo pomylić dobrą sprzedaż z dobrym
              biznesem albo wysokie saldo z bezpieczeństwem finansowym.
            </p>
          </div>

          <div className={styles.featuredGrid}>
            {featured.map((article) => (
              <Link
                href={`/wiedza/${article.slug}`}
                className={styles.featuredCard}
                key={article.slug}
              >
                <div className={styles.cardTopline}>
                  <span className={styles.articleNumber}>
                    {String(article.number).padStart(2, "0")}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className={styles.readMore}>Czytaj artykuł →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.librarySection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeadingCompact}>
            <p className={styles.eyebrow}>PRAKTYCZNA BIBLIOTEKA</p>
            <h2>20 tematów, które pomagają czytać własną firmę</h2>
          </div>

          <nav className={styles.jumpNav} aria-label="Kategorie wiedzy">
            {categoryOrder.map((category) => (
              <a key={category} href={`#${slugifyCategory(category)}`}>
                {category}
              </a>
            ))}
          </nav>

          <div className={styles.categoryStack}>
            {categoryOrder.map((category) => {
              const items = knowledgeArticles.filter(
                (article) => article.category === category
              );

              return (
                <section
                  className={styles.categorySection}
                  id={slugifyCategory(category)}
                  key={category}
                >
                  <div className={styles.categoryHeader}>
                    <h3>{category}</h3>
                    <span>{items.length} artykułów</span>
                  </div>

                  <div className={styles.articleList}>
                    {items.map((article) => (
                      <Link
                        href={`/wiedza/${article.slug}`}
                        className={styles.articleRow}
                        key={article.slug}
                      >
                        <span className={styles.rowNumber}>
                          {String(article.number).padStart(2, "0")}
                        </span>
                        <div className={styles.rowContent}>
                          <h4>{article.title}</h4>
                          <p>{article.excerpt}</p>
                        </div>
                        <span className={styles.rowMeta}>{article.readTime}</span>
                        <span className={styles.rowArrow} aria-hidden="true">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={`${styles.shell} ${styles.bottomCtaInner}`}>
          <div>
            <p className={styles.eyebrow}>FINTEGRADE.AI</p>
            <h2>Wiedza jest ważna. Jeszcze lepiej, gdy pracuje na Twoich danych.</h2>
            <p>
              fintegrade.ai rozwijamy po to, aby takie pojęcia jak płynność,
              rentowność czy marża nie kończyły się na teorii, lecz pomagały
              podejmować codzienne decyzje w konkretnej firmie.
            </p>
          </div>
          <div className={styles.ctaLinks}>
            <Link href="/ankieta" className={styles.primaryLink}>
              Wypełnij ankietę
            </Link>
            <Link href="/kontakt" className={styles.secondaryLink}>
              Skontaktuj się
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function slugifyCategory(category: string) {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
