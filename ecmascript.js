"use strict";

module.exports = {
    rules: {
        // https://eslint.org/docs/rules/array-callback-return
        "array-callback-return": ["warn", { allowImplicit: true /* allow early return */, checkForEach: true }],
        // https://eslint.org/docs/rules/curly
        curly: ["warn", "all"],
        // https://eslint.org/docs/rules/dot-notation
        "dot-notation": "warn",
        // https://eslint.org/docs/rules/no-await-in-loop
        "no-await-in-loop": "warn",
        // https://eslint.org/docs/rules/no-constructor-return
        "no-constructor-return": "warn",
        // https://eslint.org/docs/rules/no-new-native-nonconstructor
        "no-new-native-nonconstructor": "warn",
        // https://eslint.org/docs/rules/no-promise-executor-return
        "no-promise-executor-return": "warn",
        // https://eslint.org/docs/rules/no-plusplus
        "no-plusplus": "warn",
        // https://eslint.org/docs/rules/no-unreachable-loop
        "no-unreachable-loop": "warn",
        // https://eslint.org/docs/rules/no-template-curly-in-string
        "no-template-curly-in-string": "warn",
        // https://eslint.org/docs/rules/no-useless-constructor
        "no-useless-constructor": "warn",
        // https://eslint.org/docs/rules/no-useless-computed-key
        "no-useless-computed-key": "warn",
        // https://eslint.org/docs/rules/no-useless-call
        "no-useless-call": "warn",
        // https://eslint.org/docs/rules/no-useless-concat
        "no-useless-concat": "warn",
        // https://eslint.org/docs/rules/no-useless-return
        "no-useless-return": "warn",
        // https://eslint.org/docs/rules/object-shorthand
        "object-shorthand": ["warn", "always"],
        // https://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-arrow-callback": [
            "warn",
            {
                allowNamedFunctions: false,
                allowUnboundThis: true,
            },
        ],
        // https://eslint.org/docs/rules/prefer-const
        "prefer-const": ["warn", { ignoreReadBeforeAssign: true }],
        // https://eslint.org/docs/rules/prefer-numeric-literals
        "prefer-numeric-literals": "warn",
        // https://eslint.org/docs/rules/prefer-regex-literals
        "prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
        radix: "warn",
        yoda: ["warn", "never", { exceptRange: true }],
    },
};
