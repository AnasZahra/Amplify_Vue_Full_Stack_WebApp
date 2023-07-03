module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'standard',
    'plugin:@eslint-community/eslint-comments/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // semi: ["always"]
    // '@eslint-community/eslint-comments/no-unused-disable': 'error'
  }
}
