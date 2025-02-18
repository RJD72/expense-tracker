import globals from "globals";
import js from "@eslint/js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: "latest", // Supports latest ES features
      sourceType: "module", // Enables ES module support
      globals: globals.browser, // Use browser-specific global variables
    },
    plugins: {
      js,
    },
    rules: {
      "no-unused-vars": "warn", // Warns for unused variables
      "no-console": "off", // Allows console.log() for debugging
      "eqeqeq": "warn", // Enforces strict equality (`===` instead of `==`)
    },
  },
  js.configs.recommended,
];
