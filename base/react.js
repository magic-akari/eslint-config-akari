module.exports = {
    plugins: ["import", "react", "react-hooks"],
    extends: ["plugin:import/react", "plugin:react/recommended", "prettier"],
    rules: {},
    settings: {
        react: {
            version: "detect",
        },
    },
};
