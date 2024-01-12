import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Tooltip',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les info-bulles affichent de brèves étiquettes ou messages</Subtitle>
          <Canvas />
          <Controls />
          <Stories />
        </>
      ),
    }
  }
};

export const WithButton = {
  args: {
    placement: 'right'
  },
  argTypes: {
    placement: {
      type: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position de la tooltip par rapport au trigger',
      table: { defaultValue: { summary: 'right' } }
    }
  },
  render: (args) => <ap-tooltip {...args}>
                      <ap-button content="Hover me" icon="circle-info" icon-position="right" />
                      <div slot="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </ap-tooltip>
}

export const WithIcon = {
  argTypes: {
    placement: { type: 'select', options: ['top', 'right', 'bottom', 'left'] }
  },
  render: (args) => <ap-tooltip {...args}>
                      <ap-icon icon="pen" />
                      <div slot="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </ap-tooltip>
}

export const WithParagraph = {
  argTypes: {
    placement: { type: 'select', options: ['top', 'right', 'bottom', 'left'] }
  },
  render: (args) => <ap-paragraph>
                      Ceci est un paragraphe avec une icône qui trigger un tooltip
                      <ap-tooltip {...args}>
                        <ap-icon icon="circle-info" />
                        <div slot="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                      </ap-tooltip>.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </ap-paragraph>


}
