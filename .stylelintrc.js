// https://stylelint.io/user-guide/configure
module.exports = {
  extends: "stylelint-config-recommended-scss",
  plugins: ["stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
