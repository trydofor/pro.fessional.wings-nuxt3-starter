module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed'],
    quotes: ['error', 'single'],
  },
};
