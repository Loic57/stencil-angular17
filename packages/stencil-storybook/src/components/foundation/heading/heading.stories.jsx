import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Typography/Heading',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>La typographie contribue à rendre l'écriture lisible et belle.</Subtitle>
          <Canvas />
          <Controls />
          <Stories />
        </>
      ),
    }
  }
};

export const Default = {
  args: {
    weight: 500,
    'text-align': 'left',
    size: 'h1',
    color: 'black'
  },
  argTypes: {
    weight: {
      control: { type: 'select' },
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      description: 'Graisse de la police',
      table: { defaultValue: { summary: '500' } }
    },
    'text-align': {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      description: 'Alignement horizontal du heading',
      table: { defaultValue: { summary: 'left' } }
    },
    size: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Taille en pixels du heading',
      table: { defaultValue: { summary: 'h1' } }
    },
    color: {
      control: { type: 'select' },
      options: ['black', 'white'],
      description: 'Couleur du heading',
      table: { defaultValue: { summary: 'black' } }
    }
  },
  render: (args) => <ap-heading {...args}>The quick brown fox jumps over the lazy dog</ap-heading>
}
