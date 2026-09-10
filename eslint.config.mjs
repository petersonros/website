import next from "eslint-config-next/core-web-vitals";
import ts from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  { ignores: [".next/**", "out/**", "node_modules/**"] },
  ...next,
  ...ts,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
