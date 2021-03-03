module.exports = {
    plugins: ["@typescript-eslint", "import"],
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "prettier",
    ],
    rules: {},
};
