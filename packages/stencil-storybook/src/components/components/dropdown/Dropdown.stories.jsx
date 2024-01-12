import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les switchs activent ou désactivent l'état d'un élément.</Subtitle>
          <Canvas />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};

document.addEventListener('clickDropdownItem', e => console.log(e.detail));

const data = [
  {
    content: 'New York',
    value: 'New York',
    id: '1'
  },
  {
    content: 'Paris',
    value: 'Paris',
    id: '2',
    selected: true
  },
  {
    content: 'Bali',
    value: 'Bali',
    id: '3'
  },
  {
    content: 'Amsterdam',
    value: 'Amsterdam',
    id: '4'
  },
  {
    content: 'Rome',
    value: 'Rome',
    id: '5',
    disabled: true
  },
  {
    content: 'Londres',
    value: 'Londres',
    id: '6'
  },
  {
    content: 'Luxembourg',
    value: 'Luxembourg',
    id: '7'
  },
  {
    content: 'Bruxelles',
    value: 'Bruxelles',
    id: '8'
  },
  {
    content: 'Lisbonne',
    value: 'Lisbonne',
    id: '9'
  },
  {
    content: 'Madrid',
    value: 'Madrid',
    id: '10'
  },
  {
    content: 'Berlin',
    value: 'Berlin',
    id: '11'
  },
  {
    content: 'Athènes',
    value: 'Athènes',
    id: '12'
  },
]

const dataWithIcons = [
  {
    content: 'New York',
    icon: 'user',
    value: 'New York',
    id: '1',
    selected: false

  },
  {
    content: 'Paris',
    icon: 'user',
    value: 'Paris',
    id: '2',
    selected: false
  },
  {
    content: 'Bali',
    icon: 'user',
    value: 'Bali',
    id: '3',
    selected: false
  },
  {
    content: 'Amsterdam',
    icon: 'user',
    value: 'Amsterdam',
    id: '4',
    selected: false
  },
  {
    content: 'Rome',
    icon: 'user',
    value: 'Rome',
    id: '5',
    disabled: true,
    selected: false
  },
  {
    content: 'Londres',
    icon: 'user',
    value: 'Londres',
    id: '6',
    selected: false
  },
  {
    content: 'Luxembourg',
    icon: 'user',
    value: 'Luxembourg',
    id: '7',
    selected: false
  }
]

const data2 = [
  {
    content: 'Imprimer l\'extrait avec certificat',
    value: 'Imprimer l\'extrait avec certificat',
    id: '1'
  },
  {
    content: 'Imprimer l\'extrait sans certificat',
    value: 'Imprimer l\'extrait sans certificat',
    id: '2'
  },
  {
    content: 'Imprimer l\'avis',
    value: 'Imprimer l\'avis',
    id: '3'
  }
]


export const Default = {
  args: {
    data: data
  },
  render: (args) =>
    <ap-dropdown {...args}>
      <ap-input
        input-id="input-1"
        label="This is a label"
        name="input-1"
        placeholder="Select a value"
        trailing-icon="chevron-down"
        required
        slot="selector"
      />
    </ap-dropdown>
}

export const Icons = {
  args: {
    data: dataWithIcons
  },
  render: (args) =>
    <ap-dropdown {...args}>
      <ap-input
        input-id="input-1"
        label="This is a label"
        name="input-1"
        placeholder="Select a value"
        trailing-icon="chevron-down"
        required
        slot="selector"
      />
    </ap-dropdown>
}

export const SplitButton = {
  args: {
    data: data2
  },
  render: (args) =>
    <ap-dropdown {...args}>
      <ap-split-button content="Imprimer le registre" icon="pen" slot="selector" />
    </ap-dropdown>
}
