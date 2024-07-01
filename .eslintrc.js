module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: "react-app",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    parser: "@babel/eslint-parser",
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "jsx-a11y/href-no-hash": [0],
        "jsx-a11y/aria-props": [0],
        "jsx-a11y/role-has-required-aria-props": [0],
        "default-case": "off",
        "react-hooks/exhaustive-deps": "off",
    },
};