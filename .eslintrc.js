module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "import/no-extraneous-dependencies": ["off"],
    "no-console": ["off"],
    "no-underscore-dangle": ["off"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
