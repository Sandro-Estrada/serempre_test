module.exports = {
  root: true,
  env: {
    // es6: true,
    // es2017: true,
    // es2020: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "max-len": ["error", {"code": 100}],
  },
};
