import { IButtonDevices } from "../../../../../../../../shared/Types/device.type";
import { CreateButton } from "../../../../ConstructorDevice.interface";

export type TypeCreateButtonDevice = (
  data: NonNullable<CreateButton>,
  idSection: number,
  lineNumber: number,
  index: number
) => void;

export type TypeDeleteButtonDevice = (
  idSection: number,
  lineNumber: number,
  index: number
) => void;
