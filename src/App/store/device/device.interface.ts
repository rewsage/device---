import { IInstrumentsButtons } from "../../shared/Types/device.type";
import RFB from "@novnc/novnc/core/rfb";

export type DeviceRedux = IInstrumentsButtons & {
  loading: boolean;
  connected: boolean;
  ref: RFB | null;
};

export interface IInitialStateDevice {
  activeDevices: IInstrumentsButtons[];
  focusDevice: IInstrumentsButtons | null;
}
