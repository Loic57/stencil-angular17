import { defineCustomElements } from '../loader';
import '../dist/ap-web-components/ap-web-components.css';
import { withActions } from '@storybook/addon-actions/decorator';
import '../src/storybook.css';

defineCustomElements();



const preview = {
  parameters: {
/*     docs: {
      toc: true, // 👈 Enables the table of contents
    }, */
        actions: {
      handles: ['clickedButton', 'click'],
    },
    options: {
      storySort: {
        order: ['Introduction', ['Accueil', 'C\'est quoi un Web Component', 'Consommer des composants dans un projet', 'Ajouter, modifier ou supprimer des composants'], 'Guidelines', 'Foundation', 'Components'],
      }
    },
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withActions],
};

export default preview;
