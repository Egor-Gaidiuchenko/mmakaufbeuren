import { listArticles } from "@/shared/lib/content-db";
import { uploadUrl } from "@/shared/lib/upload-url";

export type Article = {
  id: number;
  title: string;
  text: string;
  photoUrl: string | null;
};

export async function loadArticles(): Promise<Article[]> {
  const articles: unknown = listArticles();
  if (!Array.isArray(articles)) {
    throw new Error("Articles response has an unexpected shape");
  }

  return articles.map((article) => {
    if (!isRecord(article)) {
      throw new Error("Articles response has an unexpected shape");
    }

    const photo = article.photo;
    const photoUrl = toPhotoUrl(photo);

    if (
      typeof article.id !== "number" ||
      typeof article.title !== "string" ||
      typeof article.text !== "string"
    ) {
      throw new Error("Articles response has an unexpected shape");
    }

    return {
      id: article.id,
      title: article.title,
      text: article.text,
      photoUrl,
    };
  });
}

function toPhotoUrl(photo: unknown): string | null {
  if (photo === null) {
    return null;
  }

  if (isRecord(photo) && typeof photo.filePath === "string") {
    return uploadUrl(photo.filePath);
  }

  throw new Error("Articles response has an unexpected shape");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
