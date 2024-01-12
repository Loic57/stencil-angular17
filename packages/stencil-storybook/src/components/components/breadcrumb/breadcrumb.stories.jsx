import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

/* document.addEventListener('clickedRadio', (e) => console.log(e.detail)) */

export default {
  title: 'Components/Breadcrumb',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Indiquer l'emplacement de la page actuelle dans une hiérarchie de navigation.</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};

export const Default = {
  render: () => <ap-breadcrumb current="Books">
    <li><ap-link><a href="#" slot="link">Home</a></ap-link></li>
    <li><ap-link><a href="#" slot="link">Library</a></ap-link></li>
    <li><ap-link><a href="#" slot="link">Documents</a></ap-link></li>
  </ap-breadcrumb>
}

