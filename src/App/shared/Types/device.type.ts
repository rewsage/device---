export interface IButtonDevices {
  id: number;
  title: string;
  style: TypeStyleButtonDevice;
  token: string;
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

export interface IResponseScan {
  duration: string;
  hosts: string[];
  unknown_hosts: string[];
}

export interface IResponsePingAll {
  hosts: string[];
}

export interface IResponseGridNetwork {
  duration: string;
  hosts: { host: string; access: boolean; unknown: boolean }[];
}
