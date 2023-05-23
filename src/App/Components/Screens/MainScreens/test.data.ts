import { IInstrumentsButtons } from "../../../shared/Types/device.type";

export const TestDevice: IInstrumentsButtons = {
  host: "192.168.88.137",
  id: 2,
  name: "Spectrum Analyzer 1337",
  token: "SA2",
  port: 5900,
  sections: [
    {
      idSection: 1,
      buttons: [
        [
          { id: 1, title: "preset", style: "green" },
          { id: 2, title: "setup", style: "default" },
          { id: 3, title: "mode", style: "default" },
        ],
        [
          null,
          { id: 4, title: "print", style: "default" },
          { id: 5, title: "file", style: "default" },
        ],
      ],
    },
    {
      idSection: 2,
      buttons: [
        [
          { id: 6, title: "freq", style: "default" },
          { id: 7, title: "span", style: "default" },
          { id: 8, title: "ampt", style: "default" },
        ],
        [
          { id: 9, title: "bw", style: "default" },
          { id: 10, title: "sweep", style: "default" },
          { id: 11, title: "trace", style: "default" },
        ],
        [
          { id: 12, title: "meas", style: "default" },
          { id: 13, title: "meas config", style: "default" },
          { id: 14, title: "lines", style: "default" },
        ],
      ],
    },
    {
      idSection: 3,
      buttons: [
        [
          { id: 15, title: "mkr", style: "default" },
          { id: 16, title: "MKR →", style: "default" },
        ],
        [
          { id: 17, title: "trig", style: "default" },
          { id: 18, title: "peak search", style: "gray" },
        ],
        [
          { id: 19, title: "run single", style: "gray" },
          { id: 20, title: "run cont", style: "gray" },
        ],
      ],
    },
    {
      idSection: 4,
      buttons: [
        [
          { id: 21, title: "7", style: "default" },
          { id: 22, title: "8", style: "default" },
          { id: 23, title: "9", style: "default" },
          { id: 24, title: "GHz s -dBm V", style: "gray" },
        ],
        [
          { id: 25, title: "4", style: "default" },
          { id: 26, title: "5", style: "default" },
          { id: 27, title: "6", style: "default" },
          { id: 28, title: "MHz..ms dBm mV", style: "gray" },
        ],
        [
          { id: 29, title: "1", style: "default" },
          { id: 30, title: "2", style: "default" },
          { id: 31, title: "3", style: "default" },
          { id: 32, title: "kHz ps dB pV", style: "gray" },
        ],
        [
          { id: 33, title: "0", style: "default" },
          { id: 34, title: ".", style: "default" },
          { id: 35, title: "-", style: "default" },
          { id: 36, title: "Hz ns dB.. nV", style: "gray" },
        ],
      ],
    },
    {
      idSection: 5,
      buttons: [
        [null, { id: 37, title: "🔼", style: "gray" }, null],
        [
          { id: 38, title: "◀️", style: "gray" },
          { id: 39, title: "🔽", style: "gray" },
          { id: 40, title: "▶️", style: "gray" },
        ],
        [
          { id: 41, title: "↺", style: "default" },
          { id: 42, title: "↭", style: "default" },
          { id: 43, title: "↻", style: "default" },
        ],
        [
          { id: 44, title: "ESC", style: "gray" },
          { id: 45, title: "BACK CONFIG", style: "gray" },
          { id: 46, title: "ENTER", style: "gray" },
        ],
      ],
    },
  ],
};
