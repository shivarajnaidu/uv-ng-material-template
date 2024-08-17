// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "comma-spacing": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@angular-eslint/use-lifecycle-interface": ["error"],
      "@angular-eslint/no-empty-lifecycle-method": ["error"],
      "@angular-eslint/sort-lifecycle-methods": ["error"],
      "@angular-eslint/prefer-standalone": ["error"],
      "@angular-eslint/prefer-output-readonly": ["error"],
      "@angular-eslint/no-output-native": ["error"],
      "@angular-eslint/no-conflicting-lifecycle": ["error"],
      "@angular-eslint/no-async-lifecycle-method": ["error"]
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
