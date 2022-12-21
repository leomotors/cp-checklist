// @ts-check

const withTM = require("next-transpile-modules")([
  "@cp-checklist/apollo",
  "@cp-checklist/codegen",
  "@cp-checklist/constants",
  "@cp-checklist/design",
]);

module.exports = withTM({
  reactStrictMode: true,
});
