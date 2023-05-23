export interface IButtonDevices {
  id: number;
  title: string;
  style: TypeStyleButtonDevice;
}

export type TypeStyleButtonDevice = "green" | "gray" | "default";

export type TypeButtons = IButtonDevices | null;

export interface ISectionButtons {
  idSection: number;
  buttons: TypeButtons[][];
}

export interface IInstrumentsButtons {
  name: string;
  id: number;
  token: string;
  host: string;
  port: number;
  sections: ISectionButtons[];
}
