module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],
    quotes: ['error', 'single'],
  },
};
