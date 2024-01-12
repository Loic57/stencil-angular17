import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';
import { Fragment } from 'react';

export default {
  title: 'Components/Modal',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Les boîtes de dialogue fournissent des invites importantes dans un flux utilisateur</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};


// Test de la fonction publique closeModal()
document.addEventListener('click', () => {
  const closeButton = document.querySelector('#close');
  const panel = document.querySelector('#panel');

  closeButton.addEventListener('click', () => panel.closeModal())
  closeButton.addEventListener('keydown', (e) => e.keyCode === 'Enter' && panel.closeModal())
})

export const Default = {
  args: {
    direction: 'right',
    opened: false
  },
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['right', 'center', 'left'],
      description: "Endroit où apparait le panneau",
      table: { defaultValue: { summary: 'center' } },
    },
    opened: {
      control: { type: 'boolean' },
      description: "Ouverture par défaut de la modal au chargement de la page",
      table: { defaultValue: { summary: 'false' } },
    }
  },
  render: (args) => <Fragment>
    <ap-button content="click to trigger modal" data-trigger-modal="test"></ap-button>
    <ap-modal data-modal="test" {...args} id="panel">
      <ap-heading size="h3" mb-24>This is a heading</ap-heading>
      <ap-paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga dolorem quaerat aspernatur adipisci! A, debitis dolores! Ratione commodi itaque recusandae tenetur voluptas, reprehenderit inventore vitae illo nostrum molestiae natus!</ap-paragraph>
      <ap-paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga dolorem quaerat aspernatur adipisci! A, debitis dolores! Ratione commodi itaque recusandae tenetur voluptas, reprehenderit inventore vitae illo nostrum molestiae natus!</ap-paragraph>
      <ap-paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga dolorem quaerat aspernatur adipisci! A, debitis dolores! Ratione commodi itaque recusandae tenetur voluptas, reprehenderit inventore vitae illo nostrum molestiae natus!</ap-paragraph>
      <ap-paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fuga dolorem quaerat aspernatur adipisci! A, debitis dolores! Ratione commodi itaque recusandae tenetur voluptas, reprehenderit inventore vitae illo nostrum molestiae natus!</ap-paragraph>

      <div className='mt-32'>
        <ap-button content="Accepter" mr-8 />
        <ap-button content="Refuser" outlined id="close" />
      </div>
    </ap-modal>
  </Fragment>
}
