

import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Split button',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Un bouton à double action</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};

export const Default = {
  args: {
    content: 'Imprimer le registre',
    icon: 'pen'
  },
  argTypes: {

  },
  render: (args) => <ap-split-button {...args} />
}
