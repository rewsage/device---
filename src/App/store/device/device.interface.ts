import { IInstrumentsButtons } from "../../shared/Types/device.type";

export interface IInitialStateDevice {
  activeDevices: IInstrumentsButtons[];
  focusDevice: IInstrumentsButtons | null
}
