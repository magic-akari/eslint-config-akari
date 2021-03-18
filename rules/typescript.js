module.exports = {
    "@typescript-eslint/naming-convention": [
        "warn",
        {
            selector: "variable",
            format: ["camelCase", "snake_case", "UPPER_CASE", "PascalCase"],
        },
        {
            selector: ["variable", "parameter"],
            types: ["boolean"],
            format: ["PascalCase"],
            prefix: ["is", "should", "has", "can", "did", "will", "without", "with"],
        },
        {
            selector: "variable",
            format: null,
            modifiers: ["unused"],
            leadingUnderscore: "require",
        },
        {
            selector: "variable",
            modifiers: ["destructured"],
            format: null,
        },
        {
            selector: "function",
            format: ["camelCase", "PascalCase"],
        },
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
    "@typescript-eslint/no-use-before-define": "off",
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
