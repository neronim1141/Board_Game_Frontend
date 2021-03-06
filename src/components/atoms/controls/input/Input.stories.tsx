import * as React from 'react';

import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Controls',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onChange: { action: 'changed' }
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta<InputProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTemplate: Story<InputProps> = (args) => <Input {...args} className="w-90" />;
export const _Input = DefaultTemplate.bind({});
