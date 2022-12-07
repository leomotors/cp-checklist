module.exports = {
  ...require("@cp-checklist/config/prettier-app"),
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@cp-checklist",
    "^\\$core",
    "^\\$modules",
    "^\\$styles",
    "^[.][.]",
    "^[.]",
  ],
};
