// THIS CODE WAS AUTOMATICALLY GENERATED
// DO NOT EDIT THIS CODE BY HAND
// YOU CAN REGENERATE IT USING npm run build

module.exports = {
    rules: {
        "react/boolean-prop-naming": "warn",
        "react/button-has-type": "warn",
        "react/destructuring-assignment": "warn",
        "react/display-name": "warn",
        "react/function-component-definition": [
            "error",
            { namedComponents: "arrow-function", unnamedComponents: "arrow-function" },
        ],
        "react/no-access-state-in-setstate": "error",
        "react/self-closing-comp": "error",
        "react/void-dom-elements-no-children": "error",
        "react/jsx-boolean-value": ["error", "always"],
        "react/jsx-max-depth": ["warn", { max: 5 }],
        "react/jsx-no-useless-fragment": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
    },
    extends: [
        "plugin:import/react",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended",
    ],
    settings: { react: { version: "detect" } },
};
