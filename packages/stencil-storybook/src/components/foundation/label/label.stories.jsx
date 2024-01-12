import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Label',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Un label vient en complétion d'un champs de formulaire (input, radio, checkbox, ...)</Subtitle>
          <Canvas />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};

const AssistiveText = {
  args: {
    'assistive-text': 'This is an assistive text'
  },
  argTypes: {
    'assistive-text': {
      control: { type: 'text' },
      description: `Petit texte sous le label qui apporte une information complémentaire.`,
      table: { defaultValue: { summary: '' } },
    },
  },
  render: (args) => <ap-label {...args} required>This is a label</ap-label>
}

const Optional = {
  args: {
    required: false
  },
  argTypes: {
    required: {
      control: { type: 'boolean' },
      description: `Définir si l'input est required ou non`,
      table: { defaultValue: { summary: 'false' } },
    },
  },
  render: (args) => <ap-label {...args}>This is a label</ap-label>
}

const Tooltip = {
  args: {
    tooltip: true
  },
  argTypes: {
    tooltip: {
      control: { type: 'boolean' },
      description: `Définir si l'input est required ou non`,
      table: { defaultValue: { summary: 'false' } },
    },
  },
  render: (args) => <ap-label {...args} required>This is a label</ap-label>
}

export const Default = {
  args: {
    content: "This is a label",
    tooltip: false,
    'assistive-text': 'This is an assistive text',
    required: false,
    ...Tooltip.args,
    ...Optional.args,
    ...AssistiveText.args
  },
  argTypes: {
    content: {
      description: `Texte du message`,
      table: { defaultValue: { summary: '' } },
    },
    ...Tooltip.argTypes,
    ...Optional.argTypes,
    ...AssistiveText.argTypes
  },
  render: (args) => <ap-label {...args}>{args.content}</ap-label>
}

export { Optional, AssistiveText, Tooltip }
