import { RefObject } from "react";
import { IInstrumentsButtons } from "../../../../../../shared/Types/device.type";

export interface IFullScreen {
  device: IInstrumentsButtons;
  closeFullscreen: (val: boolean) => void;
  disconnect: () => void;
  screen: RefObject<HTMLDivElement>;
  loading: boolean;
  connected: boolean;
  connect: () => void;
}
