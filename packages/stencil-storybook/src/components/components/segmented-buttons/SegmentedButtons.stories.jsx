import { React } from 'react'
import { APSegmentedButtons } from '../../../../dist/collection/components/components/segmented-buttons/segmented-buttons';

export default {
  title: 'Components/Segmented Buttons',
  component: APSegmentedButtons
};


const Template = () => {
  return <ap-segmented-buttons>
    <ap-button content="This is a button" icon="check" size="sm" />
    <ap-button content="This is a button" outlined size="sm" />
    <ap-button content="This is a button" outlined size="sm" />
    <ap-button content="This is a button" outlined size="sm" />
    <ap-button content="This is a button" outlined size="sm" />
  </ap-segmented-buttons>;
}

export const SegmentedButtons = Template.bind({});
