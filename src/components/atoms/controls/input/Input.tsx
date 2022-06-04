import React, { InputHTMLAttributes } from 'react';

import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputClassType } from '../../../types';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'disabled' | 'placeholder'
> &
  InputClassType & {
    placeholder?: string;
  };
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name = '', className, size = 'md', invalid, disabled = false, placeholder, ...props },
    ref
  ) => {
    return (
      <input
        className={clsx(
          'input',
          {
            'input--sm': size === 'sm',
            'input--lg': size === 'lg'
          },
          {
            'input--invalid': invalid,
            'input--disabled': disabled
          },
          className
        )}
        ref={ref}
        disabled={disabled}
        name={name}
        aria-invalid={invalid}
        aria-disabled={disabled}
        placeholder={placeholder ?? 'Type here...'}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
