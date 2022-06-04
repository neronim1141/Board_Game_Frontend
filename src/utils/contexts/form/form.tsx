import * as React from 'react';

import { createContext, ReactNode } from 'react';
import { FormProvider as Provider, UseFormReturn } from 'react-hook-form';
import { AnyObjectSchema, reach } from 'yup';
import { useContextFallback } from '../context.utils';

const FormContext = createContext<AnyObjectSchema | undefined>(undefined);

type FormProviderType<T> = {
  methods: UseFormReturn<T>;
  schema: AnyObjectSchema;
  children?: ReactNode;
};
export const FormProvider = <T,>({ methods, schema, children }: FormProviderType<T>) => {
  return (
    <Provider {...methods}>
      <FormContext.Provider value={schema}>{children}</FormContext.Provider>
    </Provider>
  );
};

const getLabel = (schema: AnyObjectSchema, name: string) => {
  return schema.fields[name].describe().label;
};
const getRequired = (schema: AnyObjectSchema, name: string) => {
  return reach(schema, name).exclusiveTests.required;
};

export const useField = (name: string) => {
  const ctx = useContextFallback(FormContext);
  return {
    label: getLabel(ctx, name),
    required: getRequired(ctx, name),
    schema: ctx
  };
};
