import {
  IButtonDevices,
  IInstrumentsButtons,
  TypeStyleButtonDevice,
} from "../../../../shared/Types/device.type";

export interface IConstructor
  extends Pick<IInstrumentsButtons, "host" | "name" | "port"> {
  type: number | string;
  sections: { buttons: CreateButton[][] }[];
}

export type CreateButton = Omit<IButtonDevices, "id"> | null;
