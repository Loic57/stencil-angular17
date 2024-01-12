import { dirname, join } from "path";
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],
  framework: {
    //name: getAbsolutePath("@storybook/react-vite"), // Le bundler react-vite fail au moment de la commande npm run storybook:build, il faut le remplacer par react-webpack5
    name: getAbsolutePath("@storybook/react-webpack5"), // Le bundler react-webpack5 fail au moment du hot reload, il faut le remplacer par react-vite
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  }
};
export default config;

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
