import * as React from 'react';

export const ErrorMessage = ({ children }: { children: string }) => (
  <span className="text-xs text-red-400">{children}</span>
);
