import { ChangeEvent } from "react";
import "./input.scss";

type InputProps = {
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type WritableInputProps = {
  value: string;
  type?: string;
  placeholder: string;
  autoComplete?: string;
  mode?: string;
  pattern?: string;
} & InputProps;

export const WritableInput = ({ label, ...rest }: WritableInputProps) => {
  return (
    <label className="label text--label text--bold text--capitalize">
      {label}
      <input className="input--writable" {...rest} required />
    </label>
  );
};

type SelectableInputProps = {
  checked: boolean;
} & InputProps;

export const SelectableInput = ({ label, ...rest }: SelectableInputProps) => (
  <label className="input--selectable flex items-center column-gap-16px">
    <input type="radio" {...rest} required />
    <span>{label}</span>
  </label>
);
