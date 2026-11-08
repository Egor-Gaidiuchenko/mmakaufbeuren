import { loadHomePhotos } from "../api/home-content";
import { PhotoCarousel } from "./photo-carousel";

export async function HomePhotos() {
  const photos = await loadHomePhotos().catch((error: unknown) => {
    console.error(error);
    return null;
  });

  if (!photos) {
    return (
      <p className="px-6 py-10 text-sm text-muted">
        Die Fotos konnten nicht geladen werden.
      </p>
    );
  }

  return <PhotoCarousel photos={photos} />;
}
