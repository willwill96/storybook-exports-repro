import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../downstream-package-1/stories.@(js|jsx|mjs|ts|tsx)", "../downstream-package-2/stories.@(js|jsx|mjs|ts|tsx)"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
