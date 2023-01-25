"use strict";

module.exports = {
    rules: {
        "react/button-has-type": "warn",
        "react/no-access-state-in-setstate": "warn",
        "react/self-closing-comp": "warn",
        "react/void-dom-elements-no-children": "warn",
        "react/jsx-boolean-value": ["warn", "always"],
        "react/jsx-fragments": "warn",
        "react/jsx-no-useless-fragment": "warn",
    },
    settings: { react: { version: "detect" } },
};
