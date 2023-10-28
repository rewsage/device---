import { Options } from "react-select/dist/declarations/src";
import { ControllerRenderProps, FieldError } from "react-hook-form";

export interface IOption<T> {
  label: string;
  value: T;
}

interface IFieldProps {
  placeholder: string;
  error?: FieldError;
  margin?: string | number;
}

export interface ISelect<T> extends IFieldProps {
  options: Options<IOption<T>>;
  field: ControllerRenderProps<any, any>;
  isMulti: boolean;
  isLoading: boolean;
}
