// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  ...require("@cp-checklist/config/prettier"),
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@cp-checklist",
    "^\\$",
    "^\\$styles",
    "^[.][.]",
    "^[.]",
  ],
};

module.exports = config;
