import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Components/Tabs',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les onglets organisent le contenu sur différents écrans et vues</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};


const Icon = {
  parameters: {
    docs: {
      description: {
        story: `Ajoutez une icône à gauche ou à droite du bouton ou encore obtenez un bouton avec une icône mais sans texte grâce à l'attribut <code>icon-only</code>`
      }
    }
  },
  render: (args) => <ap-tabs {...args} style={{'width': '1000px'}}>
    <ap-tab content="Tab 1" id="tab-1" selected icon="house">
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 2" id="tab-2" icon="user">
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 3" id="tab-3" icon="calendar">
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 4" id="tab-4" icon="enveloppe">
      <ap-paragraph>
        tab 4
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 5" id="tab-5">
      <ap-paragraph>
        tab 5
      </ap-paragraph>
    </ap-tab>
  </ap-tabs>
}

export const Default = {
  args: {
    type: 'filled'
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['filled', 'border', 'text'],
      description: `Design de l'état selectionné`,
      table: { defaultValue: { summary: 'filled' } },
    }
  },
  render: (args) => <ap-tabs {...args} style={{'width': '1000px'}}>
    <ap-tab content="Tab 1" id="tab-1" selected>
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 2" id="tab-2" disabled>
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 3" id="tab-3">
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
      <ap-paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 4" id="tab-4">
      <ap-paragraph>
        tab 4
      </ap-paragraph>
    </ap-tab>
    <ap-tab content="Tab 5" id="tab-5">
      <ap-paragraph>
        tab 5
      </ap-paragraph>
    </ap-tab>
  </ap-tabs>
}


export { Icon }
