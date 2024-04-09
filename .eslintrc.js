module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-trailing-spaces': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    semi: [
      'error',
      'never',
    ],
    indent: [
      'error',
      2,
    ],
    quotes: [
      'warn',
      'single',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
      },
    ],
    'prefer-const': 'error',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'import/order': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external',
          ],
          'internal',
          [
            'parent',
            'sibling',
            'index',
          ],
        ],
        'newlines-between': 'always',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreUrls: true,
        ignoreComments: true,
      },
    ],
  },
}
