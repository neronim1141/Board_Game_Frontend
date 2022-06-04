import React, { ComponentProps } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useField } from '../../utils/contexts/form/form';
import { Input as InputBase } from '../atoms/controls/input';
import { ControlledInput } from '../types';

export const Input: React.FC<ControlledInput & ComponentProps<typeof InputBase>> = ({
  name,
  ...rest
}) => {
  const { control } = useFormContext();
  const { label } = useField(name);
  return (
    <>
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <InputBase {...field} invalid={!!fieldState.error} {...rest} />
        )}
      />
    </>
  );
};
