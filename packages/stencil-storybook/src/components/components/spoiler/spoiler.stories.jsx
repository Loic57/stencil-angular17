import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Components/Spoiler',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Masquer ou afficher de longues sections de textes à l'aide d'un clic sur un bouton</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};

const ExpandedByDefault = {
  args: {
    expanded: true
  },
  argTypes: {
    expanded: {
      control: { type: 'boolean' },
      description: "Contenu affiché ou masqué par défaut.",
      table: { defaultValue: { summary: 'false' } },
    }
  },
  render: (args) => <ap-spoiler {...args}>
                      <ap-paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                      </ap-paragraph>

                      <ap-paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                      </ap-paragraph>
                   </ap-spoiler>
}

export const Default = {
  args: {
    'number-of-lines': '3',
    'read-more-text': 'Lire plus',
    'read-less-text': 'Lire moins',
    expanded: false
  },
  argTypes: {
    'number-of-lines': {
      control: { type: 'number' },
      description: "Nombre de lignes visibles avant de cliquer sur le bouton lire plus.",
      table: { defaultValue: { summary: '3' } },
    },
    'read-more-text': {
      description: "Texte apparaissant sur le bouton qui permet de faire apparaitre la suite du texte.",
      table: { defaultValue: { summary: 'Lire plus' } },
    },
    'read-less-text': {
      description: "Texte apparaissant sur le bouton qui permet de cacher le texte.",
      table: { defaultValue: { summary: 'Lire moins' } },
    },
    ...ExpandedByDefault.argTypes
  },
  render: (args) => <ap-spoiler {...args}>
                      <ap-paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                      </ap-paragraph>

                      <ap-paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation
                      </ap-paragraph>
                   </ap-spoiler>
}

export { ExpandedByDefault }
