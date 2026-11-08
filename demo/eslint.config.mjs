import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^@/(_pages|widgets|features|entities)/[^/]+/.+",
              message:
                "Import the slice public API: @/<layer>/<slice>. See docs/architecture.md.",
            },
            {
              regex: "^@/(shared|_app)/[^/]+/.+",
              message:
                "Import the segment public API: @/shared/<segment> or @/_app/<segment>.",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
