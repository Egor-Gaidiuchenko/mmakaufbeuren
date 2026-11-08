import type { Metadata } from "next";
import { Suspense } from "react";

import { ArticlePage } from "@/_pages/artikel";
import { loadArticles } from "@/_pages/artikel/api/article-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const articles = await loadArticles().catch((error: unknown) => {
    console.error(error);
    return null;
  });
  const article = articles?.find((item) => item.id === Number(id));
  return { title: article?.title ?? "Artikel" };
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const articles = await loadArticles();
  return articles.map((article) => ({ id: String(article.id) }));
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<p className="px-4 py-12 text-sm">Artikel wird geladen.</p>}>
      <ArticleRoute params={params} />
    </Suspense>
  );
}

async function ArticleRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const articleId = Number(id);
  return <ArticlePage articleId={Number.isInteger(articleId) ? articleId : -1} />;
}
