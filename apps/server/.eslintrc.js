// @ts-check

/** @type {import("eslint").Linter.Config} */
const config = {
  ...require("@cp-checklist/config/eslint"),
  ignorePatterns: ["src/@generated/**/*", "dist/**/*"],
};

module.exports = config;
