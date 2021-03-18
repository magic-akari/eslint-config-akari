module.exports = {
    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    "no-shadow": "error",

    // disallow use of variables before they are defined
    // 在主要使用 `let` 和 `const` 的环境下, 意义不大
    "no-use-before-define": "off",

    "one-var": ["warn", "never"],
};
