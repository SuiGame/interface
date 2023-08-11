module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-prettier/recommended'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
}
