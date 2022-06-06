import * as React from 'react';
import { ReactNode } from 'react';

export type LabelProps = {
  labelFor?: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
};
export const Label = ({ labelFor, children, required = false, className }: LabelProps) => {
  return (
    <label htmlFor={labelFor} className={`text-lg ${className}`}>
      {children}
      {required && <span className="text-red-500 text-xs align-top">*</span>}
    </label>
  );
};
