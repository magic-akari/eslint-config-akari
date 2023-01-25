Config for TypeScript

```bash
pnpm add -D eslint eslint-config-akari @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier
```

```json
{
    "root": true,
    "parserOptions": {
        "project": "./path/to/tsconfig.json"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "extends": [
        "eslint:recommended",
        "akari",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "akari/typescript",
        "prettier"
    ]
}
```