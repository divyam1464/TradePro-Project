import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Example: disable specific rules
      "no-console": "off",          // allows console.log
      "react/react-in-jsx-scope": "off", // Next.js doesn't need React import
      "react/prop-types": "off",    // if you don't use prop-types
      "@typescript-eslint/no-unused-vars": "off", // ignore unused vars in TS
    },
  },
];

export default eslintConfig;
