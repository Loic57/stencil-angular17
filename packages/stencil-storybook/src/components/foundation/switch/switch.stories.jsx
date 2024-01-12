import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

import iconsList from '../../../utils/icons';

export default {
  title: 'Foundation/Switch',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les switchs activent ou désactivent l'état d'un élément.</Subtitle>
          <Canvas />
          <Controls />
          <Stories />
        </>
      ),
    }
  }
};


const Icon = {
  args: {
    'leading-icon': 'cross',
    'trailing-icon': 'check',
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
  render: (args) => <ap-switch {...args} />
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
  render: (args) => <ap-switch {...args} />
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
  render: (args) => <ap-switch {...args} />
}

const Required = {
  args: {
    required: true
  },
  argTypes: {
    required: {
      control: { type: 'boolean' },
      description: `Spécifie qu'un champ de saisie doit être rempli avant de soumettre le formulaire`,
      table: { defaultValue: { summary: 'false' } },
    }
  },
  render: (args) => <ap-switch {...args} />
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
  render: (args) => <ap-switch {...args} />
}

const Label = {
  args: {
    label: `This is a label`,
    'assistive-text': 'This is an helper text',
    required: false,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: `Affiche un label`,
      table: { defaultValue: { summary: 'Affiche un label' } }
    },
    'assistive-text': {
      control: { type: 'text' },
      description: `Affiche un texte qui complète le label`,
      table: { defaultValue: { summary: 'Affiche un texte qui complète le label' } }
    },
    required: {
      control: { type: 'boolean' },
      description: `Affiche un <code>(optional)</code> si jamais le switch n'est pas required`,
      table: { defaultValue: { summary: 'false' } }
    }
  },
  render: (args) => <ap-switch {...args} />
}


export const Default = {
  args: {
    ...Disabled.args,
    ...Required.args,
    ...Icon.args,
    ...Error.args,
    ...ID.args,
    ...Label.args,
    checked: false,
    disabled: false,
    error: false,

  },
  argTypes: {
    ...Disabled.argTypes,
    ...Required.argTypes,
    ...Icon.argTypes,
    ...Error.argTypes,
    ...ID.argTypes,
    ...Label.args,
  },
  render: (args) => <ap-switch {...args} />
}

export { Label, Error, Icon, Required, Disabled }
