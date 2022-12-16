// @ts-check

const  {reactConfig} = require("@leomotors/config/eslint");
const base = reactConfig();

/** @type {import("eslint").Linter.Config} */
const config = {
  ...base,
  extends: [...base.extends, "next/core-web-vitals"],
};

module.exports = config;
