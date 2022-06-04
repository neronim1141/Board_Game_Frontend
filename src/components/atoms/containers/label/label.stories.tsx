import * as React from 'react';

import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from './label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Containers/Label',
  component: Label,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: 'Label'
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta<LabelProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTemplate: Story<LabelProps> = (args) => <Label {...args} />;
export const _Label = DefaultTemplate.bind({});
