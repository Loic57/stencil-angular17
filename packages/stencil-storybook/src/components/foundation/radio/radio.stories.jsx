

import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';


export default {
  title: 'Foundation/Radio',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les cases à cocher permettent aux utilisateurs de sélectionner un ou plusieurs éléments dans une liste, ou d'activer ou de désactiver un élément.</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};


const Label = {
  args: {
    label: `This is a label with <a href='https://google.fr'>a link</a>`,
    'assistive-text': 'This is an helper text',
    required: false,
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: `Affiche un label`,
      table: { defaultValue: { summary: '' } }
    },
    'assistive-text': {
      control: { type: 'text' },
      description: `Affiche un texte qui complète le label`,
      table: { defaultValue: { summary: '' } }
    },
    required: {
      control: { type: 'boolean' },
      description: `Affiche un <code>(optional)</code> si jamais la checkbox n'est pas required`,
      table: { defaultValue: { summary: 'false' } }
    }
  },
  render: (args) => <ap-radio {...args} />
}

const Border = {
  args: {
    border: true
  },
  argTypes: {
    border: {
      control: { type: 'boolean' },
      description: `Affiche un <code>(optional)</code> si jamais la checkbox n'est pas required`,
      table: { defaultValue: { summary: 'false' } }
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Ajoute une couche de design en plus, permet de rendre la checkbox mieux visible à l'écran`
      }
    }
  },
  render: (args) => <ap-radio {...args} />
}

const Indeterminate = {
  args: {
    indeterminate: true
  },
  argTypes: {
    indeterminate: {
      control: { type: 'boolean' },
      description: `Ajout un aspect "mi-choché"`,
      table: { defaultValue: { summary: 'false' } }
    }
  },
  parameters: {
    docs: {
      description: {
        story: `L'état indéterminé est uniquement visuel. La case à cocher est toujours cochée ou décochée en tant qu'état. Cela signifie que l'état visuel indéterminé masque la valeur réelle de la case à cocher, ce qui a plus de sens dans votre interface utilisateur !`
      }
    }
  },
  render: (args) => <ap-radio {...args} />
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
  render: (args) => <ap-radio {...args} label="This is a label" />
}


export const Default = {
  args: {
    checked: false,
    disabled: false,
    inputName: 'test',
    value: '1',
    ...Label.args,
    ...Border.args,
    ...Error.args,
    error: false,
    'assistive-text': ''
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
      description: 'Etat checké de la checkbox',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Checkbox non cliquable ou focusable',
      table: { defaultValue: { summary: 'false' } },
    },
    ...Label.argTypes,
    ...Border.argTypes,
    ...Error.argTypes,
  },
  render: (args) => <ap-radio {...args} />
}

export { Label, Border, Error, Indeterminate }
