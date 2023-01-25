"use strict";

module.exports = {
    plugins: ["node"],
    rules: {
        "node/no-new-require": "warn",
        "node/no-path-concat": "warn",
        "node/no-process-exit": "warn",
        "node/prefer-global/buffer": ["warn", "never"],
        "node/prefer-global/console": ["warn", "always"],
        "node/prefer-global/process": ["warn", "never"],
        "node/prefer-global/text-decoder": ["warn", "always"],
        "node/prefer-global/text-encoder": ["warn", "always"],
        "node/prefer-global/url-search-params": ["warn", "always"],
        "node/prefer-global/url": ["warn", "always"],
    },
    env: { node: true },
};
