import antfu from "@antfu/eslint-config";
import nextPlugin from "@next/eslint-plugin-next";

export default antfu(
  {
    type: "app",
    formatters: true,
    typescript: true,
    react: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: [".pnpm-store/**", "**/migrations/*"],
  },
  {
    rules: {
      "ts/consistent-type-definitions": ["error", "type"],
      "perfectionist/sort-imports": ["error", { tsconfigRootDir: "." }],
      "unicorn/filename-case": [
        "error",
        { case: "kebabCase", ignore: ["README.md"] },
      ],
      "node/no-process-env": ["error"],
      "ts/no-redeclare": "off",
    },
  },
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
);
