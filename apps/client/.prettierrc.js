// @ts-check

const {
  withSortImports,
  orderNextWithOrg,
} = require("@leomotors/config/prettier");

module.exports = withSortImports({
  importOrder: orderNextWithOrg("cp-checklist"),
});
