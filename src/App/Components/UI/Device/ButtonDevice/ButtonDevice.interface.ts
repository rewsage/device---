import { ButtonHTMLAttributes } from "react";
import { TypeStyleButtonDevice } from "../../../../shared/Types/device.type";

export interface IButtonDeviceProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode: TypeStyleButtonDevice;
}
