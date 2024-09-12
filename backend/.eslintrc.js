module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
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
    // Enforce stricter linting rules that will flag potential issues
    'no-unused-vars': 'error', // Disallow unused variables
    'no-console': 'error', // Disallow use of console (useful in production code)
    eqeqeq: ['error', 'always'], // Enforce strict equality (=== and !==)
    curly: 'error', // Require curly braces for all control statements
    'no-var': 'error', // Disallow use of var, prefer let/const
    'prefer-const': 'error', // Prefer const over let when variables are not reassigned
    'no-debugger': 'error', // Disallow debugger in code
    strict: ['error', 'global'], // Enforce strict mode globally
    'no-redeclare': 'error' // Disallow variable redeclaration,
  }
}
