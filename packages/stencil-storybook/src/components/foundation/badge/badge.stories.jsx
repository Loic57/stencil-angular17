
import iconsList from '../../../utils/icons';

import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Badge',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les listes à sélection multiple permet à un utilisateur de faire un choix ou plusieurs choix dans une liste</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};


const Color = {
  args: {
    color: 'error',
    outlined: false,
    text: false,
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary-300', 'error', 'warning'],
      description: "Couleur du badge, si par défaut aucune couleur n'est définie c'est la couleur par défaut définie dans Stencil qui sera appliquée",
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
        story: 'Les badges sont livrés en plusieurs couleurs qui ont toutes un impact sémantique différent.'
      }
    }
  },
  render: (args) => <ap-badge {...args} content="This is a badge" />
}

const Size = {
  args: {
    size: 'sm',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'default'],
      description: 'Taille du badge',
      table: { defaultValue: { summary: 'default' } },
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Envie de badges plus gros ou plus petits ? Ajoutez l'attribut <code>sm</code> ou <code>lg</code> pour des tailles supplémentaires.`
      }
    }
  },
  render: (args) => <ap-badge {...args} content="This is a badge" />
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
      description: `Badge contenant une seule icône sans texte`,
      table: { defaultValue: { summary: 'false' } }
    }
  },
  parameters: {
    docs: {
      description: {
        story: `Ajoutez une icône à gauche ou à droite du badge ou encore obtenez un badge avec une icône mais sans texte grâce à l'attribut <code>icon-only</code>`
      }
    }
  },
  render: (args) => <ap-badge {...args} content="This is a badge" />
}

export const Default = {
  args: {
    content: "This is a badge",
    outlined: false,
    text: false
  },
  argTypes: {
    content: {
      description: 'Contenu textuel du badge',
      table: { defaultValue: { summary: '' } },
    },
    ...Color.argTypes,
  },
  render: (args) => <ap-badge {...args} />
}

export { Color, Size, Icon }
