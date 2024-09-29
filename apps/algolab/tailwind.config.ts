
const { catppuccinColors, generateTailwindConfig } = require("@coding-club-gct/theme/src");

const customConfig = generateTailwindConfig(catppuccinColors);

module.exports = {
    ...customConfig,
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
        './mdx-components.tsx',
    ],
    plugins: [require('tailwind-highlightjs')],
    safelist: [
      {
        pattern: /hljs+/,
      },
    ],
    theme: {
      hljs: {
        theme: 'atom-one-dark',
      },
    },
};

