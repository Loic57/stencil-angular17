import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

import iconsList from '../../../utils/icons';

export default {
  title: 'Foundation/Icon',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les icônes sont de petits symboles pour des actions ou d'autres éléments</Subtitle>
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
    icon: 'bell',
    size: 32,
    rounded: false,
    color: 'black'
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconsList,
      description: `Une icône devant le champs texte`,
      table: { defaultValue: { summary: '' } },
    },
    size: {
      control: { type: 'select' },
      options: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
      description: `Taille d'une icône en pixels`,
      table: { defaultValue: { summary: '' } },
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'primary-500'],
      description: `Couleur de l'icône`,
      table: { defaultValue: { summary: 'primary-500' } },
    }
  },
  render: (args) => <ap-icon {...args} />
}
