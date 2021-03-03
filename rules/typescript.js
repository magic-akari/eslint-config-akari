module.exports = {
    "@typescript-eslint/naming-convention": [
        "warn",
        // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
        {
            selector: "variable",
            format: ["camelCase", "snake_case", "UPPER_CASE", "PascalCase"],
        },
        // Allow camelCase functions (23.2), and PascalCase functions (23.8)
        {
            selector: "function",
            format: ["camelCase", "PascalCase"],
        },
        // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
        {
            selector: "typeLike",
            format: ["PascalCase"],
        },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-implicit-any-catch": "error",
    "@typescript-eslint/no-shadow": ["error", { ignoreTypeValueShadow: true }],
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly-parameter-types": [
        "warn",
        {
            checkParameterProperties: true,
            ignoreInferredTypes: true,
        },
    ],
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unified-signatures": "warn",
};
