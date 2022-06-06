import clsx from 'clsx';
import * as React from 'react';
import { ReactNode } from 'react';
import { ErrorMessage } from '../../atoms/containers/error-message/error-message';
import { Label } from '../../atoms/containers/label/label';

export type FieldProps = {
  label: ReactNode;
  labelFor?: string;
  helper?: ReactNode;
  errorMessage?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};

export const Field = ({
  label,
  labelFor,
  helper,
  errorMessage,
  required,
  children,
  className
}: FieldProps) => {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>
      <div className="flex justify-between items-end ">
        <Label labelFor={labelFor} required={required}>
          {label}
        </Label>
        {helper && <span className="text-xs">{helper}</span>}
      </div>
      {children}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};
