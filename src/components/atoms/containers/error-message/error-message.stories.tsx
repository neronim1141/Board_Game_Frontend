import * as React from 'react';

import { Story, Meta } from '@storybook/react';
import { ErrorMessage, ErrorMessageProps } from './error-message';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Containers/ErrorMessage',
  component: ErrorMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    children: 'Label'
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta<ErrorMessageProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTemplate: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args} />;
export const _Label = DefaultTemplate.bind({});
