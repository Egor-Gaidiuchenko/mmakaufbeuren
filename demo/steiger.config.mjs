import { defineConfig } from "steiger";
import fsd from "@feature-sliced/steiger-plugin";

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      // Страницы импортируются из корневого app/, его steiger не видит.
      "fsd/insignificant-slice": "off",
      // Префикс _ у _app и _pages — договорённость с Next.js. Правило сравнивает имя папки как есть.
      "fsd/typo-in-layer-name": "off",
    },
  },
  {
    files: ["./src/_app/styles/**"],
    rules: {
      "fsd/public-api": "off",
    },
  },
  {
    // Глобальный CSS забирается из composition относительным путём.
    files: ["./src/_app/composition/**"],
    rules: {
      "fsd/no-public-api-sidestep": "off",
    },
  },
]);
