import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Typography/Paragraph',
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
    size: '16',
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
      description: 'Alignement horizontal du paragraphe',
      table: { defaultValue: { summary: 'left' } }
    },
    size: {
      control: { type: 'select' },
      options: ['20', '18', '16', '14', '12', '10'],
      description: 'Taille en pixels du paragraphe',
      table: { defaultValue: { summary: '16' } }
    }
  },
  render: (args) => <ap-paragraph {...args}>The quick brown fox jumps over the lazy dog</ap-paragraph>
}
