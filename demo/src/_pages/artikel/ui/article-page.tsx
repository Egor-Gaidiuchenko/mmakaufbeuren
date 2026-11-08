import Link from "next/link";

import { routes } from "@/shared/config";
import { Container, SignalLink } from "@/shared/ui";

import { loadArticles } from "../api/article-content";

type ArticlePageProps = {
  articleId?: number;
};

export async function ArticlePage({ articleId }: ArticlePageProps) {
  const articles = await loadArticles().catch((error: unknown) => {
    console.error(error);
    return null;
  });

  if (!articles) {
    return (
      <main>
        <Container>
          <p className="px-4 py-12 text-sm sm:px-6 md:px-10 lg:px-[72px]">
            Der Artikel konnte nicht geladen werden.
          </p>
        </Container>
      </main>
    );
  }

  const article =
    articleId === undefined ? articles[0] : articles.find((item) => item.id === articleId);

  if (!article) {
    return (
      <main>
        <Container>
          <p className="px-4 py-12 text-sm sm:px-6 md:px-10 lg:px-[72px]">
            Dieser Artikel wurde nicht gefunden.
          </p>
        </Container>
      </main>
    );
  }

  const paragraphs = article.text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0);
  const lead = paragraphs[0] ?? "";
  const body = paragraphs.slice(1);
  const words = article.text.split(/\s+/).filter((word) => word.length > 0).length;
  const minutes = Math.max(1, Math.round(words / 180));

  return (
    <main>
      <section className="bg-ink text-white">
        <Container>
          <div className="px-4 pt-6 pb-6 sm:px-6 md:px-10 md:pt-8 lg:px-[72px] lg:pt-10">
            <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">Journal</p>
            <h1 className="mt-3 text-[32px] leading-none font-semibold tracking-tight uppercase sm:text-[40px] md:text-[48px] lg:text-[60px] lg:leading-[64px]">
              {article.title}
            </h1>
            {lead ? (
              <p className="mt-3 max-w-[720px] text-sm leading-6 text-muted md:text-base lg:mt-4 lg:text-xl lg:leading-8">
                {lead}
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      {article.photoUrl ? (
        <section className="bg-paper">
          <Container>
            <div className="px-4 pt-6 sm:px-6 md:px-10 md:pt-8 lg:px-[72px] lg:pt-10">
              <img src={article.photoUrl} alt="" className="h-auto w-full" />
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-paper text-ink">
        <Container>
          <div className="px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-[72px] lg:pt-[72px] lg:pb-[72px]">
            <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">
              {minutes} Min Lesezeit
            </p>
            <div className="mt-8 max-w-[1000px] space-y-8 md:mt-10">
              {body.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0
                      ? "text-2xl leading-tight font-semibold tracking-tight sm:text-[28px] md:text-[32px] lg:text-[40px]"
                      : "text-base leading-7 md:text-lg md:leading-8"
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <SignalLink href={routes.trial}>Probetraining anfragen</SignalLink>
            </div>
            <Link href={routes.journal} className="mt-8 inline-block text-sm font-medium">
              ← Zurück zum Journal
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
