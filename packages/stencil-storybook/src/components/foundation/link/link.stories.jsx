import { Title, Controls, Stories, Canvas } from '@storybook/blocks';

import iconsList from '../../../utils/icons';

export default {
  title: 'Foundation/Link',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Canvas />
          <Controls />
          <Stories />
        </>
      ),
    }
  }
};

const Size = {
  args: {
    size: 'default'
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['default', 'sm'],
      description: `Taille du lien (font-size)`,
      table: { defaultValue: { summary: 'default' } },
    },
  },
  render: (args) => <ap-link {...args}>
                      <a href="#" slot="link">This is a link</a>
                    </ap-link>
}

export const WithParagraph = {
  render: (args) => <ap-paragraph>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit <ap-link {...args}>
                        <a href="#" slot="link">This is a link </a>
                      </ap-link> eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ap-paragraph>
}

export const Default = {
  args: {
    ...Size.args,
    icon: 'arrow-right-long',
    'icon-position': 'right'
  },
  argTypes: {
    ...Size.argTypes,
    icon: iconsList
  },
  render: (args) => <ap-link {...args}>
                      <a href="#" slot="link">This is a link</a>
                    </ap-link>
};


export { Size }

