import { Suspense } from "react";

import { ArticlePage, metadata } from "@/_pages/artikel";

export { metadata };

export default function Page() {
  return (
    <Suspense fallback={<p className="px-4 py-12 text-sm">Artikel wird geladen.</p>}>
      <ArticlePage />
    </Suspense>
  );
}
