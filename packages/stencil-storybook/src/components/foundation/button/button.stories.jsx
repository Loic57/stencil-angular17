
import iconsList from '../../../utils/icons';

import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

/* document.addEventListener('clickedButton', (e) => {
  console.log(e.detail)
}) */


export default {
  title: 'Foundation/Button',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les boutons permettent aux utilisateurs d'agir et de faire des choix en un seul clic.</Subtitle>
          <Canvas of={Default} />
          <Subtitle>Propriétés</Subtitle>
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    },
    actions: {
      handles: ['clickedButton', 'click'],
    },
  }
};

const Color = {
  args: {
    color: 'secondary-500',
    outlined: false,
    text: false,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary-500', 'secondary-500'],
      description: "Couleur du bouton, si par défaut aucune couleur n'est définie c'est la couleur par défaut définie dans Stencil qui sera appliquée",
      table: { defaultValue: { summary: 'primary-500' } },
    },
    outlined: {
      control: { type: 'boolean' },
      description: "Suppression de la couleur de fond",
      table: { defaultValue: { summary: 'false' } },
    },
    text: {
      control: { type: 'boolean' },
      description: `Suppression de la couleur de fond et de la bordure ne laissant plus qu'un bouton avec un texte`,
      table: { defaultValue: { summary: 'false' } },
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Les boutons sont livrés en plusieurs couleurs qui ont toutes un impact sémantique différent.'
      }
    }
  },
  render: (args) => <ap-button {...args} content="This is a button" />
}

const Size = {
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Taille du bouton',
      table: { defaultValue: { summary: 'default' } },
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Envie de boutons plus gros ou plus petits ? Ajoutez l'attribut <code>sm</code> ou <code>lg</code> pour des tailles supplémentaires.`
      }
    }
  },
  render: (args) => <ap-button {...args} content="This is a button" />
}

const Icon = {
  args: {
    icon: 'pen',
    'icon-only': false,
    'icon-position': 'left'
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconsList,
      description: 'Afficher une icône dans le bouton',
      table: { defaultValue: { summary: '' } }
    },
    'icon-position': {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: `Position de l'icône, avant ou après le contenu texte.`,
      table: { defaultValue: { summary: 'left' } },
      /* if: { arg: 'icon', exists: true } */
    },
    'icon-only': {
      control: { type: 'boolean' },
      description: `Bouton contenant une seule icône sans texte`,
      table: { defaultValue: { summary: 'false' } }
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Ajoutez une icône à gauche ou à droite du bouton ou encore obtenez un bouton avec une icône mais sans texte grâce à l'attribut <code>icon-only</code>`
      }
    }
  },
  render: (args) => <ap-button {...args} content="This is a button" />
}


export const Default = {
  args: {
    content: "This is a button",
    disabled: false,
    outlined: false,
    text: false
  },
  argTypes: {
    content: {
      description: 'Contenu textuel du bouton',
      table: { defaultValue: { summary: '' } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Bouton non cliquable ou focusable',
      table: { defaultValue: { summary: 'false' } },
    },
    ...Color.argTypes,
    ...Size.argTypes,
    ...Icon.argTypes,
  },
  render: (args) => <ap-button {...args} />
}

export { Color, Size, Icon }
