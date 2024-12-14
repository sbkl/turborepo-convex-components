import baseConfig, { restrictEnvAccess } from "@test/eslint-config/base";
import nextjsConfig from "@test/eslint-config/nextjs";
import reactConfig from "@test/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
