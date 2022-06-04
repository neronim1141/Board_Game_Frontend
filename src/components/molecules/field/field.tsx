import * as React from 'react';
import { ReactNode } from 'react';
import { ErrorMessage } from '../../atoms/containers/error-message/error-message';
import { Label } from '../../atoms/containers/label/label';

export type FieldProps = {
  label: string;
  labelFor?: string;
  helperText?: string;
  errorMessage?: string;
  required?: boolean;
  children: ReactNode;
};

export const Field = ({
  label,
  labelFor,
  helperText,
  errorMessage,
  required,
  children
}: FieldProps) => {
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
