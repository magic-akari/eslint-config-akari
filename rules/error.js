module.exports = {
    // Disallow await inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    "no-await-in-loop": "error",

    // disallow use of console
    "no-console": "warn",

    // disallow use of constant expressions in conditions
    "no-constant-condition": "warn",

    "no-empty": ["error", { allowEmptyCatch: true }],

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": "off",

    // Disallow Number Literals That Lose Precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    "no-loss-of-precision": "warn",

    // 可能把 return value 与 resolve 混淆
    // https://eslint.org/docs/rules/no-promise-executor-return
    "no-promise-executor-return": "error",

    // https://eslint.org/docs/rules/no-template-curly-in-string
    "no-template-curly-in-string": "warn",

    // Disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    "no-unreachable-loop": "error",

    "no-unused-vars": ["error", { args: "none" }],

    // Disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    "no-useless-backreference": "error",

    // disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    "no-negated-in-lhs": "off",

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    // note: not enabled because it is very buggy
    "require-atomic-updates": "off",

    // disallow comparisons with the value NaN
    "use-isnan": "warn",

    // ensure JSDoc comments are valid
    // https://eslint.org/docs/rules/valid-jsdoc
    "valid-jsdoc": "off",

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    "valid-typeof": ["error", { requireStringLiterals: true }],
};
