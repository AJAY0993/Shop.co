module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    semi: 'off', // No semicolons,
    'no-undef': 'error',
    'comma-dangle': ['error', 'never'], // No trailing commas
    'no-unused-expressions': ['error'], // Disallow unused expressions
    // Additional rules
    indent: ['error', 2], // 2-space indentation
    quotes: ['error', 'single'], // Use single quotes
    'no-console': 'warn', // Warn on console statements
    eqeqeq: ['error', 'always'], // Enforce strict equality
    curly: ['error', 'all'], // Enforce consistent brace style for all control statements
    'no-var': 'error', // Disallow var, use let and const instead
    'prefer-const': 'error', // Prefer const over let where possible
    'arrow-parens': ['error', 'always'], // Enforce parentheses around arrow function arguments
    'no-multiple-empty-lines': ['error', { max: 1 }], // Disallow multiple empty lines
    'space-before-function-paren': ['error', 'always'], // Space before function parenthesis
    'no-trailing-spaces': 'error', // Disallow trailing whitespace
    'keyword-spacing': ['error', { before: true, after: true }], // Enforce spacing around keywords
    'space-infix-ops': 'error', // Require spacing around operators
    'eol-last': ['error', 'always'], // Require newline at the end of files
    'object-curly-spacing': ['error', 'always'], // Enforce consistent spacing inside braces
    'array-bracket-spacing': ['error', 'never'] // Disallow spacing inside array brackets
  }
};
