export type UiVariant = 'red' | 'light';
export type InputClassType = {
  disabled?: boolean;
  invalid?: boolean;
  className?: string;
};

export type ControlledInput = {
  name: string;
};

export type DefaultClassType = {
  disabled?: boolean;
  hasError?: boolean;
  className?: string;
};

export type Form<T = unknown> = {
  onSubmit: (values: T) => void;
  values?: T;
  className?: string;
};
export type OptionItemProps = {
  selected: boolean;
  label: string;
  multiple?: boolean;
};

export type Option<T = unknown> = {
  label: string;
  value: T;
  disabled?: boolean;
};
