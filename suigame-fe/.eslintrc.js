module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': ['warn', 100],
    'vue/multi-word-component-names': ['off'],
    'vue/no-reserved-component-names': ['off'],
  },
}
