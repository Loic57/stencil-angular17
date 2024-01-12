import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

/* document.addEventListener('clickedRadio', (e) => console.log(e.detail)) */

export default {
  title: 'Components/Fieldset',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>L'élément HTML fieldset est utilisé afin de regrouper plusieurs contrôles interactifs ainsi que des étiquettes dans un formulaire HTML.</Subtitle>
          <Canvas of={Default} />
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};

export const Default = {
  render: () => <ap-fieldset label="This is a fieldset">
                  <ap-radio checked input-id="radio-1" label="This is a label with <a href=&quot;https://google.fr&quot;>a link</a>" input-name="drone" value="1"/>
                  <ap-radio input-id="radio-2" label="This is a label with <a href=&quot;https://google.fr&quot;>a link</a>" input-name="drone" value="2"/>
                </ap-fieldset>
}

