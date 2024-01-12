import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

import iconsList from '../../../utils/icons';

export default {
  title: 'Foundation/Input',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les champs de texte permettent aux utilisateurs de saisir du texte dans une interface utilisateur</Subtitle>
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
    label: 'This is a label',
    'assistive-text': 'This is an assistive text'
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: `Un label vient en complétion d'un champs de formulaire (input, radio, checkbox, ...)`,
      table: { defaultValue: { summary: '' } },
    },
    'assistive-text': {
      control: { type: 'text' },
      description: `Petit texte sous le label qui apporte une information complémentaire.`,
      table: { defaultValue: { summary: '' } },
    },
  },
  render: (args) => <ap-input {...args} />
}

const Label = {
  args: {
    label: 'This is a label'
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: `Un label vient en complétion d'un champs de formulaire (input, radio, checkbox, ...)`,
      table: { defaultValue: { summary: '' } },
    },
  },
  render: (args) => <ap-input {...args} />
}

const Disabled = {
  args: {
    disabled: true
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: `Un label vient en complétion d'un champs de formulaire (input, radio, checkbox, ...)`,
      table: { defaultValue: { summary: 'false' } },
    },
  },
  render: (args) => <ap-input {...args} />
}

const Required = {
  args: {
    required: true,
    ...Label.args
  },
  argTypes: {
    required: {
      control: { type: 'boolean' },
      description: `Spécifie qu'un champ de saisie doit être rempli avant de soumettre le formulaire`,
      table: { defaultValue: { summary: 'false' } },
    },
    ...Label.argTypes
  },
  render: (args) => <ap-input {...args} />
}

const Error = {
  args: {
    error: true,
    'error-text': 'This is an error message'
  },
  argTypes: {
    error: {
      control: { type: 'boolean' },
      description: `Passe la checkbox en mode erreur.`,
      table: { defaultValue: { summary: 'false' } }
    },
    'error-text': {
      control: { type: 'text' },
      description: `Message qui apporte de l'info sur le type d'erreur`,
      table: { defaultValue: { summary: '' } }
    },
  },
  render: (args) => <ap-input {...args} />
}

const Icon = {
  args: {
    'leading-icon': 'user',
    'trailing-icon': '',
  },
  argTypes: {
    'leading-icon': {
      control: { type: 'select' },
      options: iconsList,
      description: `Une icône devant le champs texte`,
      table: { defaultValue: { summary: '' } },
    },
    'trailing-icon': {
      control: { type: 'select' },
      options: iconsList,
      description: `Une icône derrière le champs texte`,
      table: { defaultValue: { summary: '' } },
    },
  },
  render: (args) => <ap-input {...args} />
}

const ID = {
  args: {
    'input-id': '',
    name: ''
  },
  argTypes: {
    'input-id': {
      control: { type: 'text' },
      description: `ID du champs, le nom <code>id</code> est protégé, il faut donc passer par <code>input-id</code>`,
      table: { defaultValue: { summary: '' } },
    },
    name: {
      control: { type: 'text' },
      description: `nom du champs`,
      table: { defaultValue: { summary: '' } },
    }
  },
  render: (args) => <ap-input {...args} />
}


export const Default = {
  args: {
    placeholder: "This is a placeholder",
    value: "This is a value",
    ...AssistiveText.args,
    ...Label.args,
    ...Disabled.args,
    ...Required.args,
    ...Icon.args,
    ...Error.args,
    ...ID.args
  },
  argTypes: {
    placeholder: {
      description: `L'attribut placeholder spécifie un court indice qui décrit la valeur attendue d'un champ de saisie`,
      table: { defaultValue: { summary: '' } },
    },
    value: {
      description: `Spécifie la valeur d'un champ de saisie`,
      table: { defaultValue: { summary: '' } },
    },
    ...AssistiveText.argTypes,
    ...Label.argTypes,
    ...Disabled.argTypes,
    ...Required.argTypes,
    ...Icon.argTypes,
    ...Error.argTypes,
    ...ID.argTypes
  },
  render: (args) => <ap-input {...args} />
}


export { Label, AssistiveText, Disabled, Required, Icon, Error, ID }
