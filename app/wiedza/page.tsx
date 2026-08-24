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

const controllingTopics = [
  "AI w controllingu: od czego naprawdę warto zacząć?",
  "Controller z AI czy AI zamiast controllera?",
  "Dlaczego automatyzacja raportowania to jeszcze nie nowoczesny controlling",
  "Jak wykorzystać AI do analizy odchyleń",
  "Rolling forecast zamiast budżetu raz w roku",
  "Jak przygotować dane finansowe do wykorzystania przez AI",
  "Jak znaleźć procesy controllingowe, które warto automatyzować jako pierwsze",
  "Od dashboardu do decyzji: dlaczego więcej KPI nie oznacza lepszego zarządzania"
];

export const metadata = {
  title: "Wiedza | fintegrade.ai",
  description:
    "Praktyczna wiedza o finansach przedsiębiorcy, controllingu i AI: płynność, rentowność, marża, koszty, forecasting i wsparcie decyzji prostym językiem."
};

export default function KnowledgePage() {
  const featured = knowledgeArticles.slice(0, 3);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>WIEDZA FINTEGRADE.AI</p>
          <h1 className={styles.heroTitle}>
            Finanse, controlling i AI bez niepotrzebnego żargonu.
          </h1>
          <p className={styles.heroLead}>
            Praktyczna biblioteka dla dwóch światów: przedsiębiorcy, który chce lepiej rozumieć finanse własnej firmy, oraz osób odpowiedzialnych za controlling, które chcą mądrze wykorzystać automatyzację i AI.
          </p>
          <div className={styles.heroPrinciples} aria-label="Jak piszemy">
            <span>prosty język</span>
            <span>konkretne przykłady</span>
            <span>od problemu do decyzji</span>
          </div>
        </div>
      </section>

      <section className={styles.tracksSection}>
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>DWIE ŚCIEŻKI WIEDZY</p>
              <h2>Wybierz perspektywę, która jest bliższa Twojej pracy.</h2>
            </div>
            <p>
              Oba obszary łączy ten sam cel: zamienić dane finansowe w lepiej uzasadnione decyzje. Różna jest skala, narzędzia i poziom złożoności.
            </p>
          </div>

          <div className={styles.tracksGrid}>
            <a href="#finanse-przedsiebiorcy" className={styles.trackCard}>
              <div className={styles.trackTopline}><span>01</span><b>20 opublikowanych artykułów</b></div>
              <h3>Finanse przedsiębiorcy</h3>
              <p>Płynność, zysk, gotówka, rentowność, marża, koszty, zatrudnienie i podatki — wyjaśnione na przykładach z życia małej firmy.</p>
              <span className={styles.trackLink}>Przejdź do biblioteki ↓</span>
            </a>

            <a href="#controlling-ai" className={`${styles.trackCard} ${styles.trackCardDark}`}>
              <div className={styles.trackTopline}><span>02</span><b>dział w rozwoju</b></div>
              <h3>Controlling × AI</h3>
              <p>Automatyzacja analiz, forecasting, scenariusze, AI jako copilot controllera i projektowanie controllingu, który wspiera decyzje zamiast tylko produkować raporty.</p>
              <span className={styles.trackLink}>Zobacz plan tematów ↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.featuredSection} id="finanse-przedsiebiorcy">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>FINANSE PRZEDSIĘBIORCY</p>
              <h2>Trzy rzeczy, które warto zrozumieć najpierw</h2>
            </div>
            <p>
              To fundamenty. Bez nich łatwo pomylić dobrą sprzedaż z dobrym biznesem albo wysokie saldo z bezpieczeństwem finansowym.
            </p>
          </div>

          <div className={styles.featuredGrid}>
            {featured.map((article) => (
              <Link href={`/wiedza/${article.slug}`} className={styles.featuredCard} key={article.slug}>
                <div className={styles.cardTopline}>
                  <span className={styles.articleNumber}>{String(article.number).padStart(2, "0")}</span>
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
              <a key={category} href={`#${slugifyCategory(category)}`}>{category}</a>
            ))}
          </nav>

          <div className={styles.categoryStack}>
            {categoryOrder.map((category) => {
              const items = knowledgeArticles.filter((article) => article.category === category);

              return (
                <section className={styles.categorySection} id={slugifyCategory(category)} key={category}>
                  <div className={styles.categoryHeader}>
                    <h3>{category}</h3>
                    <span>{items.length} artykułów</span>
                  </div>

                  <div className={styles.articleList}>
                    {items.map((article) => (
                      <Link href={`/wiedza/${article.slug}`} className={styles.articleRow} key={article.slug}>
                        <span className={styles.rowNumber}>{String(article.number).padStart(2, "0")}</span>
                        <div className={styles.rowContent}>
                          <h4>{article.title}</h4>
                          <p>{article.excerpt}</p>
                        </div>
                        <span className={styles.rowMeta}>{article.readTime}</span>
                        <span className={styles.rowArrow} aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.controllingSection} id="controlling-ai">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>CONTROLLING × AI</p>
              <h2>Drugi dział Wiedzy budujemy wokół realnych problemów controllingu.</h2>
            </div>
            <p>
              Na początku publikujemy wiedzę wynikającą z praktyki i rozwijanych wdrożeń. Nie będziemy tworzyć biblioteki „o AI” — interesują nas przypadki, w których technologia realnie poprawia proces analityczny albo decyzję.
            </p>
          </div>

          <div className={styles.topicGrid}>
            {controllingTopics.map((topic, index) => (
              <article className={styles.topicCard} key={topic}>
                <div><span>{String(index + 1).padStart(2, "0")}</span><b>W przygotowaniu</b></div>
                <h3>{topic}</h3>
              </article>
            ))}
          </div>

          <div className={styles.controllingCta}>
            <div>
              <strong>Chcesz zobaczyć, jak podchodzę do wdrożeń?</strong>
              <p>Na stronie Controlling × AI opisuję obszary, od których warto zaczynać, oraz sposób pracy od diagnozy do prototypu.</p>
            </div>
            <Link href="/controlling-ai" className={styles.primaryLink}>Controlling × AI</Link>
          </div>
        </div>
      </section>

      <section className={styles.bottomCta}>
        <div className={`${styles.shell} ${styles.bottomCtaInner}`}>
          <div>
            <p className={styles.eyebrow}>FINTEGRADE.AI</p>
            <h2>Wiedza jest ważna. Jeszcze lepiej, gdy pracuje na rzeczywistym problemie.</h2>
            <p>
              Dla mikrofirm rozwijamy finansowego Digital Twin. Dla większych organizacji — rozwiązania controllingowe wspierane przez AI. W obu przypadkach technologia ma prowadzić do lepszej decyzji, nie do kolejnego raportu.
            </p>
          </div>
          <div className={styles.ctaLinks}>
            <Link href="/digital-twin" className={styles.primaryLink}>Digital Twin</Link>
            <Link href="/controlling-ai" className={styles.secondaryLink}>Controlling × AI</Link>
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
