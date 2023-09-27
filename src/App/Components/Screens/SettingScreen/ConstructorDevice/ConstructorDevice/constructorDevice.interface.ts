import { ControllerRenderProps, FieldError } from "react-hook-form";

export interface IConstructorDevice {
  field: ControllerRenderProps<any, any>;
  error?: FieldError;
  placeholder: string;
}
