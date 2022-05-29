import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { InputClassType } from '../../../types';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & InputClassType;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name = '', className, invalid, disabled = false, placeholder, ...props }, ref) => {
    return (
      <input
        className={clsx(
          'input ',
          {
            'input-text input-border': !disabled && !invalid,
            'input--invalid input-text--invalid input-border--invalid': invalid,
            'input--disabled input-text--disabled input-border--disabled': disabled
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
