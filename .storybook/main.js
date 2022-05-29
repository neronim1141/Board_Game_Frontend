const Unocss = require('unocss/vite');
const { mergeConfig } = require('vite');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [Unocss.default()]
    });
  },
  features: {
    storyStoreV7: true
  },
  typescript: {
    check: true
  }
};
