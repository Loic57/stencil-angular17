import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Components/Expand',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Afficher ou masquer du contenu</Subtitle>
          <Canvas of={Default} />
          <Subtitle>Props</Subtitle>
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};

const Icons = {
  args: {
    'expand-icon': 'plus',
    'collapse-icon': 'minus'
  },
  argTypes: {
    'expand-icon': {
      control: { type: 'select' },
      options: ['chevron-down', 'plus'],
      description: "Icône expand",
      table: { defaultValue: { summary: 'chevron-down' } },
    },
    'collapse-icon': {
      control: { type: 'select' },
      options: ['chevron-up', 'minus'],
      description: "Icône collapse",
      table: { defaultValue: { summary: 'chevron-up' } },
    }
  },
  render: (args) => <ap-expand {...args} control="Lire la suite" trigger-text="This is a trigger">
    <ap-paragraph>
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    </ap-paragraph>
  </ap-expand>
}

const Expanded = {
  args: {
    expanded: true
  },
  argTypes: {
    expanded: {
      description: "Etat du composant au chargement de la page",
      table: { defaultValue: { summary: 'false' } },
    }
  },
  render: (args) => <ap-expand {...args} control="Lire la suite" trigger-text="This is a trigger">
    <ap-paragraph>
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    </ap-paragraph>
  </ap-expand>
}

const IconPosition = {
  args: {
    'icon-position': 'right',
  },
  argTypes: {
    'icon-position': {
      control: { type: 'select' },
      options: ['left', 'right', 'narrow'],
      description: "Position de l'icône",
      table: { defaultValue: { summary: 'right' } },
    },
  },
  render: (args) => <ap-expand {...args} aria-controls="Lire la suite" trigger-text="This is a trigger">
    <ap-paragraph>
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    </ap-paragraph>
  </ap-expand>
}

export const Default = {
  args: {
    ...Icons.args,
    expanded: false,
    'aria-controls': "expand-1",
    'trigger-text': "This is a trigger",
    'aria-label': "Cliquer pour lire la suite"
  },
  argTypes: {
    ...Icons.argTypes,
    ...Expanded.argTypes,
    ...IconPosition.argTypes,
    'trigger-text': {
      description: 'Label',
      table: { defaultValue: { summary: '' } },
    },
    'aria-label': {
      description: 'Propriété ARIA qui représente le label du bouton expand/collapse lu par le lecteur d\'écran',
      table: { defaultValue: { summary: '' } },
    },
    'aria-controls': {
      description: 'Propriété ARIA qui permet de lier le bouton au contenu caché.',
      table: { defaultValue: { summary: '' } },
    }
  },
  render: (args) => <ap-expand {...args}>
    <ap-paragraph>
      Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    </ap-paragraph>
  </ap-expand>
}

export { Expanded, Icons, IconPosition }
