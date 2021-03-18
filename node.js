// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// YOU CAN REGENERATE IT USING npm run build

module.exports = {
    rules: {
        "accessor-pairs": "off",
        "array-callback-return": ["error", { allowImplicit: true }],
        "block-scoped-var": "error",
        "class-methods-use-this": ["error", { exceptMethods: [] }],
        curly: 0,
        "default-case": ["error", { commentPattern: "^no default$" }],
        "default-case-last": "error",
        "default-param-last": "error",
        "dot-notation": ["error", { allowKeywords: true }],
        "dot-location": "off",
        eqeqeq: ["error", "always"],
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "no-alert": "warn",
        "no-caller": "error",
        "no-constructor-return": "error",
        "no-else-return": ["error", { allowElseIf: false }],
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-native-reassign": "off",
        "no-implicit-coercion": ["error", { boolean: false, number: true, string: true, allow: ["!!"] }],
        "no-implicit-globals": "warn",
        "no-implied-eval": "error",
        "no-invalid-this": "warn",
        "no-labels": ["error", { allowLoop: true, allowSwitch: true }],
        "no-lone-blocks": "warn",
        "no-loop-func": "error",
        "no-multi-spaces": "off",
        "no-multi-str": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-proto": "error",
        "no-restricted-properties": [
            "error",
            { object: "arguments", property: "callee", message: "arguments.callee is deprecated" },
            { object: "global", property: "isFinite", message: "Please use Number.isFinite instead" },
            { object: "self", property: "isFinite", message: "Please use Number.isFinite instead" },
            { object: "window", property: "isFinite", message: "Please use Number.isFinite instead" },
            { object: "global", property: "isNaN", message: "Please use Number.isNaN instead" },
            { object: "self", property: "isNaN", message: "Please use Number.isNaN instead" },
            { object: "window", property: "isNaN", message: "Please use Number.isNaN instead" },
            { object: "global", property: "parseInt", message: "Please use Number.parseInt instead" },
            { object: "self", property: "parseInt", message: "Please use Number.parseInt instead" },
            { object: "window", property: "parseInt", message: "Please use Number.parseInt instead" },
            { object: "global", property: "parseFloat", message: "Please use Number.parseFloat instead" },
            { object: "self", property: "parseFloat", message: "Please use Number.parseFloat instead" },
            { object: "window", property: "parseFloat", message: "Please use Number.parseFloat instead" },
            { property: "__defineGetter__", message: "Please use Object.defineProperty instead." },
            { property: "__defineSetter__", message: "Please use Object.defineProperty instead." },
            { object: "Math", property: "pow", message: "Use the exponentiation operator (**) instead." },
        ],
        "no-return-assign": ["error", "always"],
        "no-return-await": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-unmodified-loop-condition": "warn",
        "no-unused-expressions": [
            "error",
            { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false },
        ],
        "no-useless-call": "warn",
        "no-useless-catch": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-void": "error",
        "no-with": "error",
        "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],
        "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
        radix: "error",
        "require-await": "off",
        "require-unicode-regexp": "warn",
        "vars-on-top": "error",
        "wrap-iife": "off",
        yoda: ["error", "never", { exceptRange: true }],
        "no-await-in-loop": "error",
        "no-console": "warn",
        "no-constant-condition": "warn",
        "no-empty": ["error", { allowEmptyCatch: true }],
        "no-extra-parens": "off",
        "no-loss-of-precision": "warn",
        "no-promise-executor-return": "error",
        "no-template-curly-in-string": "warn",
        "no-unreachable-loop": "error",
        "no-unused-vars": ["error", { args: "none" }],
        "no-useless-backreference": "error",
        "no-negated-in-lhs": "off",
        "require-atomic-updates": "off",
        "use-isnan": "warn",
        "valid-jsdoc": "off",
        "valid-typeof": ["error", { requireStringLiterals: true }],
        "arrow-spacing": "off",
        "generator-star-spacing": "off",
        "no-confusing-arrow": 0,
        "no-duplicate-imports": "off",
        "no-useless-computed-key": "warn",
        "no-useless-constructor": "error",
        "no-useless-rename": ["error", { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false }],
        "no-var": "error",
        "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
        "prefer-arrow-callback": ["error", { allowNamedFunctions: false, allowUnboundThis: true }],
        "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
        "prefer-numeric-literals": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "error",
        "prefer-template": "off",
        "rest-spread-spacing": "off",
        "symbol-description": "error",
        "template-curly-spacing": "off",
        "yield-star-spacing": "off",
        "array-bracket-newline": "off",
        "array-element-newline": "off",
        "array-bracket-spacing": "off",
        "arrow-body-style": "off",
        "arrow-parens": "off",
        "block-spacing": "off",
        "brace-style": "off",
        camelcase: ["warn", { properties: "never", ignoreDestructuring: false }],
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": "off",
        "computed-property-spacing": "off",
        "consistent-this": "off",
        "eol-last": "off",
        "function-call-argument-newline": "off",
        "func-call-spacing": "off",
        "function-paren-newline": "off",
        "implicit-arrow-linebreak": "off",
        indent: "off",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "linebreak-style": "off",
        "lines-between-class-members": ["error", "always"],
        "new-cap": [
            "error",
            {
                newIsCap: true,
                newIsCapExceptions: [],
                capIsNew: false,
                capIsNewExceptions: ["Immutable.Map", "Immutable.Set", "Immutable.List"],
            },
        ],
        "new-parens": "off",
        "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
        "no-array-constructor": "error",
        "no-bitwise": "warn",
        "no-multi-assign": ["error"],
        "no-multiple-empty-lines": "off",
        "no-negated-condition": "off",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-ternary": "off",
        "no-trailing-spaces": "off",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "off",
        "prefer-exponentiation-operator": "error",
        "operator-linebreak": "off",
        quotes: 0,
        semi: "off",
        "semi-spacing": "off",
        "semi-style": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": "off",
        "space-infix-ops": "off",
        "space-unary-ops": "off",
        "spaced-comment": [
            "error",
            "always",
            {
                line: { exceptions: ["-", "+"], markers: ["=", "!", "/"] },
                block: { exceptions: ["-", "+"], markers: ["=", "!", ":", "::"], balanced: true },
            },
        ],
        "template-tag-spacing": "off",
        "unicode-bom": "off",
        "wrap-regex": "off",
        "no-label-var": "error",
        "no-shadow": "error",
        "no-use-before-define": "off",
        "one-var": ["warn", "never"],
        strict: "warn",
        "handle-callback-err": "off",
        "no-buffer-constructor": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "off",
        "no-process-exit": "off",
        "no-restricted-modules": "off",
        "no-sync": "off",
        "no-mixed-operators": "error",
        "node/no-deprecated-api": "error",
    },
    extends: ["eslint:recommended", "plugin:node/recommended", "plugin:prettier/recommended"],
    env: { node: true, es6: true },
};
