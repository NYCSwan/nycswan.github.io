import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import react from "react";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
      },
    },
    ignores: ["dist", "node_modules/**", "eslint.config.mjs"],
    plugins: { react: react },
    files: ["src/**/*.ts", "src/**/*.tsx"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-undef": "off",
      "no-unused-vars": "off",
    },
  },
  {
    files: ["src/__tests__/**"],
    languageOptions: {
      globals: {
        ...globals.jest,
        NODE_ENV: "test",
      },
    },
    ignores: ["dist", "node_modules/**", "eslint.config.mjs"],
  },
];
// TODO finish testing the components, babel error ?
