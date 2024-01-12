import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Error Text',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Un message d'erreur apparait sous champs de formulaire incorrect au moment de la soumission.</Subtitle>
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
    content: "This is an error text",
  },
  argTypes: {
    content: {
      description: `Texte du message`,
      table: { defaultValue: { summary: '' } },
    },
  },
  render: (args) => <ap-error-text {...args} />
}
