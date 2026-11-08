import "server-only";

import path from "node:path";
import { DatabaseSync } from "node:sqlite";

function databasePath() {
  return path.join(process.cwd(), "mmakaufbeuren.sqlite");
}

function withDatabase(read) {
  const database = new DatabaseSync(databasePath(), {
    enableForeignKeyConstraints: true,
    timeout: 5000,
  });

  try {
    return read(database);
  } finally {
    database.close();
  }
}

export function listCarouselPhotos() {
  return withDatabase((database) => {
    const rows = database
      .prepare("SELECT id, file_path FROM photo WHERE collection = 'carousel' ORDER BY sort_order ASC")
      .all();

    return rows.map((row) => ({
      id: row.id,
      filePath: row.file_path,
    }));
  });
}

export function listTrainers() {
  return withDatabase((database) => {
    const rows = database
      .prepare(
        `SELECT trainer.id, trainer.first_name, trainer.last_name, photo.id AS photo_id, photo.file_path
         FROM trainer
         LEFT JOIN photo ON photo.id = trainer.photo_id
         ORDER BY trainer.sort_order ASC`,
      )
      .all();

    return rows.map((row) => ({
      id: row.id,
      firstName: row.first_name,
      lastName: row.last_name,
      photo:
        row.photo_id === null || row.file_path === null
          ? null
          : {
              id: row.photo_id,
              filePath: row.file_path,
            },
    }));
  });
}

export function listArticles() {
  return withDatabase((database) => {
    const rows = database
      .prepare(
        `SELECT article.id, article.title, article.text, photo.id AS photo_id, photo.file_path
         FROM article
         LEFT JOIN photo ON photo.id = article.photo_id
         ORDER BY article.sort_order ASC`,
      )
      .all();

    return rows.map((row) => ({
      id: row.id,
      title: row.title,
      text: row.text,
      photo:
        row.photo_id === null || row.file_path === null
          ? null
          : {
              id: row.photo_id,
              filePath: row.file_path,
            },
    }));
  });
}
