import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
    globalIgnores(["dist"]),

    {
        files: ["**/*.{js,jsx}"],

        extends: [
            js.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2022,
            },

            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },

        rules: {
            // React 19 + ESLint 10:
            // ปิดกฎใหม่ที่เข้มเกินไปสำหรับโค้ดปัจจุบัน
            "react-hooks/refs": "off",
            "react-hooks/set-state-in-effect": "off",
        },
    },

    {
        files: ["src/test/**/*.{js,jsx}"],

        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
]);