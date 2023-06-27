module.exports = {
  root: true,
  ignorePatterns: ['node_modules/**'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Import rules.
    'sort-imports': 'error',
    'no-duplicate-imports': 'error',

    // Import plugin rules.
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'alphabetize': { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': 'error',
    'import/no-unassigned-import': 'error',

    // Allow printing to console.
    'no-console': ['error', { allow: ['debug', 'info', 'warn', 'error'] }],

    // Warnings.
    'no-restricted-modules': [
      'warn',
      {
        name: 'child_process',
        message: 'Sanitize user input.',
      },
    ],

    // Other rules.
    'func-names': ['error', 'as-needed', { generators: 'as-needed' }],
  },
};
