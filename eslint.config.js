import js from "@eslint/js";

export default [
  {
    files: ["*.js"],
    languageOptions: {
      globals: {
        document: "readonly", // Define 'document' as a global variable
        console: "readonly", // Define 'console' as a global variable
        window: "readonly", // Define 'window' as a global variable (if needed)
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
