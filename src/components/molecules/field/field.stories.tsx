import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field, FieldProps } from './field';
import { Input } from '../../atoms/controls';
import { useId } from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Field',
  component: Field,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    label: 'Label',
    helper: 'need help?',
    required: false
  },
  argTypes: {},
  parameters: {
    controls: { expanded: true }
  }
} as Meta<FieldProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTemplate: Story<FieldProps> = (args) => {
  const id = useId();
  return (
    <Field {...args} labelFor={id} className="bg-neutral-800 p-2 rounded">
      <Input id={id} invalid={!!args.errorMessage} />
    </Field>
  );
};
export const _Field = DefaultTemplate.bind({});
