import { Suspense } from "react";
import Link from "next/link";

import { loadArticles } from "@/_pages/artikel/api/article-content";
import { articlePath, routes } from "@/shared/config";
import { Container, SignalLink } from "@/shared/ui";

const articles = [
  {
    href: articlePath(2),
    eyebrow: "Training / Entwurf",
    title: "Technik vor Tempo",
    text: "Ein geplanter Beitrag über kontrolliertes Lernen.",
  },
  {
    href: routes.article,
    eyebrow: "Community / Entwurf",
    title: "Ein Team. Viele Wege.",
    text: "Platz für echte Geschichten aus dem Gym.",
  },
] as const;

export function JournalPage() {
  return (
    <main>
      <section className="bg-ink text-white">
        <Container>
          <div className="px-4 pt-8 pb-10 sm:px-6 md:px-10 md:pt-12 md:pb-14 lg:px-[72px] lg:pt-[72px] lg:pb-16">
            <p className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
              Journal / Aus dem Gym
            </p>
            <h1 className="mt-4 text-[32px] leading-none font-semibold tracking-tight uppercase sm:text-[40px] md:mt-6 md:text-[48px] lg:text-[64px] lg:leading-[72px]">
              Was uns
              <br />
              bewegt.
            </h1>
            <p className="mt-4 max-w-[640px] text-sm leading-6 text-muted md:mt-6 md:text-base lg:text-xl lg:leading-8">
              Training, Wissen und Geschichten von der Matte.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-paper text-ink">
        <Container>
          <div className="px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14 lg:px-[72px] lg:py-[72px]">
            <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">
              Ausgewählt / Leseprobe
            </p>
            <h2 className="mt-4 text-[28px] leading-tight font-semibold tracking-tight sm:text-[32px] md:mt-6 md:text-[40px] lg:text-[48px]">
              Dein erstes MMA-Training.
            </h2>
            <Suspense fallback={<div className="mt-6 h-40 w-full bg-sand md:mt-8" />}>
              <FeaturedPhoto />
            </Suspense>
            <p className="mt-6 text-xl leading-tight font-semibold sm:text-2xl md:mt-8 md:text-[28px]">
              Alles für deinen ersten Schritt.
            </p>
            <div className="mt-6 md:mt-8">
              <SignalLink href={routes.article}>Artikel lesen</SignalLink>
            </div>
            <ul className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
              {articles.map((article) => (
                <li key={article.title}>
                  <Link href={article.href} className="block bg-sand px-5 py-6 md:px-8 md:py-8">
                    <p className="font-mono text-xs tracking-[0.08em] text-signal uppercase">
                      {article.eyebrow}
                    </p>
                    <h3 className="mt-4 text-xl leading-tight font-semibold md:mt-6 md:text-[28px]">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-base leading-6 md:mt-6">{article.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </main>
  );
}

async function FeaturedPhoto() {
  const articles = await loadArticles().catch((error: unknown) => {
    console.error(error);
    return null;
  });
  const article = articles?.find((item) => item.id === 1) ?? articles?.[0];

  if (!article?.photoUrl) {
    return <p className="mt-6 text-sm">Das Foto konnte nicht geladen werden.</p>;
  }

  return <img src={article.photoUrl} alt="" className="mt-6 h-auto w-full md:mt-8" />;
}
