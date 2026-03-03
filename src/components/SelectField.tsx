import { useField } from "formik";
import type React from "react";

type SelectFieldProps<T> = {
  name: string;
  label: string;
  options: T[];
  getOptionLabel: (option: T) => string;
  getOptionValue: (option: T) => string;
};

function SelectField<T>({label, options, getOptionLabel, getOptionValue, ...props}: SelectFieldProps<T>): React.JSX.Element {
    
  const [field, meta] = useField(props.name);

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={props.name}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
      </label>

      <select
        id={props.name}
        {...field}
        className="p-2.5 rounded-lg border text-sm outline-none transition-all duration-200"
      >
        <option value="">Select {label}</option>

        {options.map((option, index) => (
          <option
            key={index}
            value={getOptionValue(option)}
          >
            {getOptionLabel(option)}
          </option>
        ))}
      </select>

      {meta.error && (
        <div className="text-xs text-red-500 mt-0.5">
          {meta.error}
        </div>
      )}
    </div>
  );
}

export default SelectField;