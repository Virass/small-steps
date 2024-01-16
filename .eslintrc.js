module.exports = {
  "env": {
    "browser": true,
    "es2023": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "indent": [
      "warning",
      2
    ],
    "linebreak-style": [
      "warning",
      "unix"
    ],
    "quotes": [
      "warning",
      "double"
    ],
    "semi": [
      "warning",
      "always"
    ],
    /* "no-console": 2, */
    "no-console": 0,
    "padding-line-between-statements": [
      2,
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      { blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      },
      { blankLine: "always", prev: "directive", next: "*" },
      { blankLine: "always", prev: "block-like", next: "*" },
    ],
    "eol-last": ["error", "always"],
    "max-len": ["error", { "code": 120 }],
  }
};
