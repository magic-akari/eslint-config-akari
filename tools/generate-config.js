/* eslint-disable no-console */
/* eslint-disable node/no-extraneous-require */
/* eslint-disable node/no-unpublished-require */

/* utility */
const { writeFileSync } = require("fs");
const { rules: typescriptESLintBuiltinRules } = require("@typescript-eslint/eslint-plugin");
const chalk = require("chalk");
const { Linter } = require("eslint");
const { rules: prettierRules } = require("eslint-config-prettier");
const { merge } = require("lodash");
const { format, resolveConfig } = require("prettier");

/* akari rules */
const CONFIG_BASE_ECMASCRIPT = require("../base/ecmascript");
const CONFIG_BASE_LEGACY = require("../base/legacy");
const CONFIG_BASE_NODE = require("../base/node");
const CONFIG_BASE_REACT = require("../base/react");
const CONFIG_BASE_TYPESCRIPT = require("../base/typescript");
const eslintConfigakariNode = require("../node");
const akariBestPracticesRules = require("../rules/best-practices");
const akariCodeStyleRules = require("../rules/code-style");
const akariErrorRules = require("../rules/error");
const akariEs6Rules = require("../rules/es6");
const akariImportRules = require("../rules/import");
const akariReactRules = require("../rules/react");
const akariTypeScriptRules = require("../rules/typescript");
const akariVariablesRules = require("../rules/variables");

/* external rules */

/* akari eslint config */

/* akari eslint config base */

/* utility */
const eslintLinter = new Linter();
const prettierConfig = resolveConfig.sync(__dirname);

console.log("========== generate node.js ==========");

writeConfig(
    merge(
        {
            rules: prettierOverwrite({
                ...akariBestPracticesRules,
                ...akariErrorRules,
                ...akariEs6Rules,
                ...akariCodeStyleRules,
                ...akariVariablesRules,
            }),
        },
        CONFIG_BASE_NODE,
    ),
    "node.js",
);

console.log("========== generate legacy.js ==========");

writeConfig(
    merge(
        {
            rules: prettierOverwrite({
                ...akariBestPracticesRules,
                ...akariErrorRules,
                ...akariEs6Rules,
                ...akariCodeStyleRules,
                ...akariVariablesRules,
            }),
        },
        CONFIG_BASE_LEGACY,
    ),
    "legacy.js",
);

console.log("========== generate ecmascript.js ==========");

writeConfig(
    merge(
        {
            rules: prettierOverwrite({
                ...akariBestPracticesRules,
                ...akariErrorRules,
                ...akariEs6Rules,
                ...akariCodeStyleRules,
                ...akariVariablesRules,
                ...akariImportRules,
            }),
        },
        CONFIG_BASE_ECMASCRIPT,
    ),
    "ecmascript.js",
);

console.log("========== generate react.js ==========");

writeConfig(
    merge(
        {
            rules: prettierOverwrite(akariReactRules),
        },
        CONFIG_BASE_REACT,
    ),
    "react.js",
);

console.log("========== generate typescript.js ==========");

const TS_ESLINT_RULE_NAME_PREFIX = "@typescript-eslint/";
const MAX_RULE_NAME_LENGTH = Object.keys(typescriptESLintBuiltinRules).reduce(
    (acc, name) => Math.max(acc, name.length),
    0,
);
const ESLINT_BASE_RULES_TO_BE_OVERRIDDEN = new Map(
    Object.entries(typescriptESLintBuiltinRules)
        .filter(([, rule]) => {
            return rule.meta.docs?.extendsBaseRule;
        })
        .map(([ruleName, rule]) => [
            ruleName,
            typeof rule.meta.docs?.extendsBaseRule === "string" ? rule.meta.docs?.extendsBaseRule : ruleName,
        ]),
);

const generatedTsConfigRules = prettierOverwrite({
    ...akariBestPracticesRules,
    ...akariErrorRules,
    ...akariEs6Rules,
    ...akariCodeStyleRules,
    ...akariVariablesRules,
    ...akariImportRules,
    ...akariTypeScriptRules,
});

Object.entries(generatedTsConfigRules).forEach(([ruleName, ruleConfig]) => {
    if (ESLINT_BASE_RULES_TO_BE_OVERRIDDEN.has(ruleName)) {
        console.log(
            ruleName
                .padStart(TS_ESLINT_RULE_NAME_PREFIX.length + ruleName.length)
                .padEnd(TS_ESLINT_RULE_NAME_PREFIX.length + MAX_RULE_NAME_LENGTH),
            "=",
            chalk.green("off"),
        );
        generatedTsConfigRules[ruleName] = "off";

        console.log(
            `${chalk.dim(TS_ESLINT_RULE_NAME_PREFIX)}${ruleName.padEnd(MAX_RULE_NAME_LENGTH)}`,
            "=",
            ruleConfig === "error" ? chalk.red(ruleConfig) : chalk.yellow(ruleConfig),
        );
        generatedTsConfigRules[`${TS_ESLINT_RULE_NAME_PREFIX}${ruleName}`] = ruleConfig;
    }

    if (ruleName === "@typescript-eslint/naming-convention") {
        console.log(
            "camelcase"
                .padStart(TS_ESLINT_RULE_NAME_PREFIX.length + "camelcase".length)
                .padEnd(TS_ESLINT_RULE_NAME_PREFIX.length + MAX_RULE_NAME_LENGTH),
            "=",
            chalk.green("off"),
        );
        generatedTsConfigRules.camelcase = "off";
        console.log(
            `${chalk.dim(TS_ESLINT_RULE_NAME_PREFIX)}${"naming-convention".padEnd(MAX_RULE_NAME_LENGTH)}`,
            "=",
            ruleConfig === "error" ? chalk.red(ruleConfig) : chalk.yellow(ruleConfig),
        );
    }
});

writeConfig(
    merge(
        {
            rules: generatedTsConfigRules,
        },
        CONFIG_BASE_TYPESCRIPT,
    ),
    "typescript.js",
);

/* ==================== Utility Functions ==================== */

function addAutoGeneratedComment(code) {
    return [
        "// THIS CODE WAS AUTOMATICALLY GENERATED",
        "// DO NOT EDIT THIS CODE BY HAND",
        "// YOU CAN REGENERATE IT USING npm run build",
        "",
        code,
    ].join("\n");
}

/**
 * Helper function writes configuration.
 * @param {Record<string, unknown>} config
 * @param {string} filePath
 */
function writeConfig(config, filePath) {
    const code = `module.exports = ${JSON.stringify(config)}`;

    const configStr = eslintLinter.verifyAndFix(
        format(addAutoGeneratedComment(code), {
            parser: "babel",
            ...prettierConfig,
        }),
        eslintConfigakariNode,
    );

    writeFileSync(filePath, configStr.output);
}

/**
 *
 * @param {Record<string, unknown>} config
 */
function prettierOverwrite(config) {
    for (const [key, value] of Object.entries(prettierRules)) {
        if (config[key] !== undefined) {
            config[key] = value;
        }
    }

    return config;
}
