import { Title, Subtitle, Controls, Stories, Canvas } from '@storybook/blocks';

export default {
  title: 'Components/Accordion',
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Construisez des accordéons qui affichent ou cachent du contenu de manière verticale.</Subtitle>
          <Canvas of={Default} />
          <Subtitle>Props</Subtitle>
          <Controls of={Default} />
          <Stories includePrimary={false} />
        </>
      ),
    }
  }
};


export const Default = {
  args: {
    expanded: false,
  },
  argTypes: {

  },
  render: (args) => <ap-accordion>
                      <ap-accordion-item aria-controls="expand-1" trigger-text="This is a trigger" expanded>
                        <ap-paragraph>
                          Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation
                        </ap-paragraph>
                      </ap-accordion-item>
                      <ap-accordion-item aria-controls="expand-2" trigger-text="This is a trigger" right-text="Small text on the right">
                        <ap-paragraph>
                          Lorem ipsum dolor sit amet, <ap-link><a href="#" slot="link">consectetur adipiscing</a></ap-link> elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation
                        </ap-paragraph>
                      </ap-accordion-item>
                      <ap-accordion-item aria-controls="expand-3" trigger-text="This is a trigger">
                        <ap-paragraph>
                          Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation
                        </ap-paragraph>
                      </ap-accordion-item>
                      <ap-accordion-item aria-controls="expand-4" trigger-text="This is a trigger">
                        <ap-paragraph>
                          Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation
                        </ap-paragraph>
                      </ap-accordion-item>
                      <ap-accordion-item aria-controls="expand-5" trigger-text="This is a trigger">
                        <ap-paragraph>
                          Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing</a> elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                          quis nostrud exercitation
                        </ap-paragraph>
                      </ap-accordion-item>
                    </ap-accordion>
}
