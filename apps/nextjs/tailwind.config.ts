import type { Config } from "tailwindcss";

import baseConfig from "@test/tailwind-config/web";

export default {
  // We need to append the path to the UI package to the content array so that
  // those classes are included correctly.
  content: [...baseConfig.content],
  presets: [baseConfig],
  theme: {},
} satisfies Config;
