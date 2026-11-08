import { listCarouselPhotos, listTrainers } from "@/shared/lib/content-db";
import { uploadUrl } from "@/shared/lib/upload-url";

export type HomePhoto = {
  id: number;
  url: string;
};

export type HomeTrainer = {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl: string | null;
};

export async function loadHomePhotos(): Promise<HomePhoto[]> {
  const photos: unknown = listCarouselPhotos();
  if (!Array.isArray(photos)) {
    throw new Error("Photos response has an unexpected shape");
  }

  return photos.map((photo) => {
    if (!isRecord(photo) || typeof photo.id !== "number" || typeof photo.filePath !== "string") {
      throw new Error("Photos response has an unexpected shape");
    }

    return {
      id: photo.id,
      url: uploadUrl(photo.filePath),
    };
  });
}

export async function loadHomeTrainers(): Promise<HomeTrainer[]> {
  const trainers: unknown = listTrainers();
  if (!Array.isArray(trainers)) {
    throw new Error("Trainers response has an unexpected shape");
  }

  return trainers.map((trainer) => {
    if (!isRecord(trainer)) {
      throw new Error("Trainers response has an unexpected shape");
    }

    const photo = trainer.photo;
    const photoUrl = toPhotoUrl(photo);

    if (
      typeof trainer.id !== "number" ||
      typeof trainer.firstName !== "string" ||
      typeof trainer.lastName !== "string"
    ) {
      throw new Error("Trainers response has an unexpected shape");
    }

    return {
      id: trainer.id,
      firstName: trainer.firstName,
      lastName: trainer.lastName,
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

  throw new Error("Trainers response has an unexpected shape");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
