const base = require("@cp-checklist/config/eslint-app");

module.exports = {
  ...base,
  extends: base.extends.concat(["next/core-web-vitals"]),
};
