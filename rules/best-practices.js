module.exports = {
    // enforces getter/setter pairs in objects
    "accessor-pairs": "off",

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    "array-callback-return": ["error", { allowImplicit: true }],

    // treat var statements as if they were block scoped
    "block-scoped-var": "error",

    // enforce that class methods use "this"
    // https://eslint.org/docs/rules/class-methods-use-this
    "class-methods-use-this": [
        "error",
        {
            exceptMethods: [],
        },
    ],

    // specify curly brace conventions for all control statements
    curly: ["error", "all"],

    // require default case in switch statements
    "default-case": ["error", { commentPattern: "^no default$" }],

    // Enforce default clauses in switch statements to be last
    "default-case-last": "error",

    // https://eslint.org/docs/rules/default-param-last
    "default-param-last": "error",

    // encourages use of dot notation whenever possible
    "dot-notation": ["error", { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // https://eslint.org/docs/rules/dot-location
    "dot-location": ["error", "property"],

    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ["error", "always"],

    // Require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    // TODO: enable in next major, altho the guide forbids getters/setters anyways
    "grouped-accessor-pairs": "error",

    // make sure for-in loops have an if statement
    "guard-for-in": "error",

    // disallow the use of alert, confirm, and prompt
    "no-alert": "warn",

    // disallow use of arguments.caller or arguments.callee
    "no-caller": "error",

    // Disallow returning value in constructor
    // https://eslint.org/docs/rules/no-constructor-return
    "no-constructor-return": "error",

    // disallow else after a return in an if
    // https://eslint.org/docs/rules/no-else-return
    "no-else-return": ["error", { allowElseIf: false }],

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": "error",

    // disallow use of eval()
    "no-eval": "error",

    // disallow adding to native types
    "no-extend-native": "error",

    // disallow unnecessary function binding
    "no-extra-bind": "error",

    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    "no-extra-label": "error",

    // deprecated in favor of no-global-assign
    "no-native-reassign": "off",

    // disallow implicit type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    "no-implicit-coercion": [
        "error",
        {
            boolean: false,
            number: true,
            string: true,
            allow: ["!!"],
        },
    ],

    // disallow var and named functions in global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": "warn",

    // disallow use of eval()-like methods
    "no-implied-eval": "error",

    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": "warn",

    // disallow use of labels for anything other then loops and switches
    "no-labels": ["error", { allowLoop: true, allowSwitch: true }],

    // disallow unnecessary nested blocks
    "no-lone-blocks": "warn",

    // disallow creation of functions within loops
    "no-loop-func": "error",

    // disallow use of multiple spaces
    "no-multi-spaces": [
        "error",
        {
            ignoreEOLComments: false,
        },
    ],

    // disallow use of multiline strings
    "no-multi-str": "error",

    // disallow use of new operator when not part of the assignment or comparison
    "no-new": "error",

    // disallow use of new operator for Function object
    "no-new-func": "error",

    // disallows creating new instances of String, Number, and Boolean
    "no-new-wrappers": "error",

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    "no-octal-escape": "error",

    // disallow usage of __proto__ property
    "no-proto": "error",

    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    "no-restricted-properties": [
        "error",
        {
            object: "arguments",
            property: "callee",
            message: "arguments.callee is deprecated",
        },
        {
            object: "global",
            property: "isFinite",
            message: "Please use Number.isFinite instead",
        },
        {
            object: "self",
            property: "isFinite",
            message: "Please use Number.isFinite instead",
        },
        {
            object: "window",
            property: "isFinite",
            message: "Please use Number.isFinite instead",
        },
        {
            object: "global",
            property: "isNaN",
            message: "Please use Number.isNaN instead",
        },
        {
            object: "self",
            property: "isNaN",
            message: "Please use Number.isNaN instead",
        },
        {
            object: "window",
            property: "isNaN",
            message: "Please use Number.isNaN instead",
        },
        {
            object: "global",
            property: "parseInt",
            message: "Please use Number.parseInt instead",
        },
        {
            object: "self",
            property: "parseInt",
            message: "Please use Number.parseInt instead",
        },
        {
            object: "window",
            property: "parseInt",
            message: "Please use Number.parseInt instead",
        },
        {
            object: "global",
            property: "parseFloat",
            message: "Please use Number.parseFloat instead",
        },
        {
            object: "self",
            property: "parseFloat",
            message: "Please use Number.parseFloat instead",
        },
        {
            object: "window",
            property: "parseFloat",
            message: "Please use Number.parseFloat instead",
        },
        {
            property: "__defineGetter__",
            message: "Please use Object.defineProperty instead.",
        },
        {
            property: "__defineSetter__",
            message: "Please use Object.defineProperty instead.",
        },
        {
            object: "Math",
            property: "pow",
            message: "Use the exponentiation operator (**) instead.",
        },
    ],

    // disallow use of assignment in return statement
    "no-return-assign": ["error", "always"],

    // disallow redundant `return await`
    "no-return-await": "error",

    // disallow comparisons where both sides are exactly the same
    "no-self-compare": "error",

    "no-sequences": "error",

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": "warn",

    // disallow usage of expressions in statement position
    "no-unused-expressions": [
        "error",
        {
            allowShortCircuit: false,
            allowTernary: false,
            allowTaggedTemplates: false,
        },
    ],

    // disallow unnecessary .call() and .apply()
    "no-useless-call": "warn",

    // Disallow unnecessary catch clauses
    // https://eslint.org/docs/rules/no-useless-catch
    "no-useless-catch": "error",

    // disallow useless string concatenation
    // https://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": "error",

    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": "error",

    // disallow redundant return; keywords
    // https://eslint.org/docs/rules/no-useless-return
    "no-useless-return": "error",

    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    "no-void": "error",

    // disallow use of the with statement
    "no-with": "error",

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

    // https://eslint.org/docs/rules/prefer-regex-literals
    "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],

    // require use of the second argument for parseInt()
    radix: "error",

    // require `await` in `async function` (note: this is a horrible rule that should never be used)
    // https://eslint.org/docs/rules/require-await
    "require-await": "off",

    // Enforce the use of u flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    "require-unicode-regexp": "warn",

    // requires to declare all vars on top of their containing scope
    "vars-on-top": "error",

    // require immediate function invocation to be wrapped in parentheses
    // https://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],

    // require or disallow Yoda conditions
    yoda: ["error", "never", { exceptRange: true }],
};