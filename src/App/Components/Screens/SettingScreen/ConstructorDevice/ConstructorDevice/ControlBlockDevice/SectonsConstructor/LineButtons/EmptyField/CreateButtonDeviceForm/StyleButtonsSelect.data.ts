import { TypeStyleButtonDevice } from "../../../../../../../../../../shared/Types/device.type";

export interface IButtonOptions {
  label: string;
  value: TypeStyleButtonDevice;
}

export const buttonsOptionData: IButtonOptions[] = [
  { label: "Обычная", value: "default" },
  { label: "Серая", value: "gray" },
  { label: "Зелёная", value: "green" },
];
