
import iconsList from '../../../utils/icons';

import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Foundation/Alert',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Fournissez des messages de retour contextuels pour les actions utilisateur typiques avec la poignée de messages d’alerte disponibles et flexibles.</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};


const Close = {
  args: {
    close: true
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'primary-500'],
      description: `Les alertes sont livrées en plusieurs couleurs qui ont toutes un impact sémantique différent.`,
      table: { defaultValue: { summary: '' } }
    }
  },
  render: (args) => <ap-alert {...args}>
                      <ap-paragraph size="18" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation <strong>ullamco laboris nisi ut</strong> aliquip ex ea commodo consequat.
                      </ap-paragraph>
                    </ap-alert>
}

const Color = {
  args: {
    color: 'error',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'primary-500'],
      description: `Les alertes sont livrées en plusieurs couleurs qui ont toutes un impact sémantique différent.`,
      table: { defaultValue: { summary: '' } }
    }
  },
  render: (args) => <ap-alert {...args}>
                      <ap-paragraph size="18" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation <strong>ullamco laboris nisi ut</strong> aliquip ex ea commodo consequat.
                      </ap-paragraph>
                    </ap-alert>
}

const Icon = {
  args: {
    icon: 'check',
  },
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconsList,
      description: `Afficher une icône devant le contenu texte de l'alerte`,
      table: { defaultValue: { summary: '' } }
    }
  },
  render: (args) => <ap-alert {...args}>
                      <ap-paragraph size="18" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation <strong>ullamco laboris nisi ut</strong> aliquip ex ea commodo consequat.
                      </ap-paragraph>
                    </ap-alert>
}

export const Default = {
  args: {

  },
  argTypes: {
   /*  size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      description: 'Taille du bouton',
      table: { defaultValue: { summary: 'default' } },
    } */
  },
/*   parameters: {
    docs: {
      description: {
        story: `Envie de boutons plus gros ou plus petits ? Ajoutez l'attribut <code>sm</code> ou <code>lg</code> pour des tailles supplémentaires.`
      }
    }
  }, */
  render: (args) => <ap-alert {...args}>
                      <ap-paragraph size="18" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation <strong>ullamco laboris nisi ut</strong> aliquip ex ea commodo consequat.
                      </ap-paragraph>
                    </ap-alert>
}

export { Color, Icon, Close }




