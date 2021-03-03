module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-rational-order", "stylelint-prettier/recommended"],
    rules: {
        "function-name-case": ["lower", { ignoreFunctions: [/^\$/u, /^css/u, /\./u] }],
        "length-zero-no-unit": [true, { ignore: ["custom-properties"], severity: "warning" }],
        "value-keyword-case": ["lower", { ignoreKeywords: [/^\$/u, /\./u] }],
    },
};
