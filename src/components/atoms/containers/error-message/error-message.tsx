import * as React from 'react';
export type ErrorMessageProps = {
  children: string;
};
export const ErrorMessage = ({ children }: ErrorMessageProps) => (
  <span className="text-sm text-red-400">{children}</span>
);
