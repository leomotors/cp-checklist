// @ts-check

/** @type {import("@trivago/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  ...require("@cp-checklist/config/prettier-app"),
  importOrder: [
    "^@nestjs",
    "<THIRD_PARTY_MODULES>",
    "^@cp-checklist",
    "^src/",
    "^./prisma",
    "^./app",
    "^[.][.]",
    "^[.]",
  ],
};

module.exports = config;
