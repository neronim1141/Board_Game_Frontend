import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { ReactNode } from 'react';
import { ErrorMessage } from '../../atoms/containers/error-message/error-message';
import { Label } from '../../atoms/containers/label/label';

type FieldProps = {
  label: string;
  labelFor?: string;
  helperText?: string;
  errorMessage?: string;
  required?: boolean;
  children: ReactNode;
};

const Field = ({ label, labelFor, helperText, errorMessage, required, children }: FieldProps) => {
  return (
    <>
      <div className="flex flex-col w-90">
        <div className="flex justify-between items-end">
          <Label labelFor={labelFor} required={required}>
            {label}
          </Label>
          {helperText && <span className="text-xs">0/20</span>}
        </div>
        {children}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    </>
  );
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Field',
  component: Field,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {
    label: 'Label'
  },
  argTypes: {},
  parameters: {
    controls: { expanded: true }
  }
} as Meta<FieldProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const DefaultTemplate: Story<FieldProps> = (args) => <Field {...args}>text</Field>;
export const _Field = DefaultTemplate.bind({});
