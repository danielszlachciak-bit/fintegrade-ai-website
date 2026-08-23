import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getKnowledgeArticle,
  knowledgeArticles,
  type KnowledgeBlock
} from "@/lib/knowledge";
import styles from "../knowledge.module.css";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return knowledgeArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | fintegrade.ai`,
    description: article.excerpt
  };
}

export default async function KnowledgeArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);

  if (!article) {
    notFound();
  }

  const articleIndex = knowledgeArticles.findIndex(
    (item) => item.slug === article.slug
  );
  const previous = articleIndex > 0 ? knowledgeArticles[articleIndex - 1] : null;
  const next =
    articleIndex < knowledgeArticles.length - 1
      ? knowledgeArticles[articleIndex + 1]
      : null;

  return (
    <main className={styles.articlePage}>
      <div className={styles.articleShell}>
        <Link href="/wiedza" className={styles.backLink}>
          ← Wróć do Wiedzy
        </Link>

        <article>
          <header className={styles.articleHeader}>
            <div className={styles.articleKicker}>
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.readTime} czytania</span>
            </div>
            <div className={styles.articleIndexBadge}>
              {String(article.number).padStart(2, "0")}
            </div>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
          </header>

          <div className={styles.articleBody}>
            {article.blocks.map((block, index) => (
              <ArticleBlockRenderer
                block={block}
                key={`${article.slug}-${index}`}
              />
            ))}
          </div>

          <div className={styles.articleDisclaimer}>
            <strong>Warto pamiętać</strong>
            <p>
              Materiał ma charakter edukacyjny i zarządczy. Nie zastępuje
              indywidualnej porady księgowej, podatkowej ani prawnej — szczegóły
              rozliczeń mogą zależeć od formy działalności i konkretnej sytuacji.
            </p>
          </div>
        </article>

        <nav className={styles.articlePager} aria-label="Nawigacja między artykułami">
          {previous ? (
            <Link href={`/wiedza/${previous.slug}`} className={styles.pagerCard}>
              <span>← Poprzedni</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/wiedza/${next.slug}`}
              className={`${styles.pagerCard} ${styles.pagerCardNext}`}
            >
              <span>Następny →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <Link
              href="/wiedza"
              className={`${styles.pagerCard} ${styles.pagerCardNext}`}
            >
              <span>Gotowe</span>
              <strong>Wróć do wszystkich artykułów</strong>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}

function ArticleBlockRenderer({ block }: { block: KnowledgeBlock }) {
  switch (block.type) {
    case "lead":
      return <p className={styles.bodyLead}>{block.text}</p>;
    case "heading":
      return <h2 className={styles.bodyHeading}>{block.text}</h2>;
    case "callout":
      return (
        <aside className={styles.callout}>
          {block.label ? <span>{block.label}</span> : null}
          <p>{block.text}</p>
        </aside>
      );
    case "formula":
      return (
        <div className={styles.formula}>
          {block.lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
      );
    case "list":
      return (
        <ul className={styles.articleListBullets}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "paragraph":
      return <p className={styles.bodyParagraph}>{block.text}</p>;
  }
}
