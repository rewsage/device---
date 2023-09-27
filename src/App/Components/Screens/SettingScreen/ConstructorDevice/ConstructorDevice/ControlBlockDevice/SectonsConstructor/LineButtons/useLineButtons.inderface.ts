import { IButtonDevices } from "../../../../../../../../shared/Types/device.type";

export type TypeCreateButtonDevice = (
  data: IButtonDevices,
  idSection: number,
  lineNumber: number,
  index: number
) => void;

export type TypeDeleteButtonDevice = (
  idSection: number,
  lineNumber: number,
  index: number
) => void;