import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IInitialStateDevice } from "./device.interface";
import { IInstrumentsButtons } from "../../shared/Types/device.type";

const initialState: IInitialStateDevice = {
  activeDevices: [
    {
      name: "qweqwe",
      host: "qweqwe",
      port: 123,
      id: 1,
      sections: [],
      token: "qwe",
    },
  ],
  focusDevice: null,
};

export const deviceSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    addActiveDevice: (state, action: PayloadAction<IInstrumentsButtons>) => {
      state.activeDevices.push(action.payload);
      state.focusDevice = action.payload;
    },
    removeActiveDevice: (state, action: PayloadAction<number>) => {
      state.activeDevices = state.activeDevices.filter(
        (item) => item.id !== action.payload
      );
      if (state.focusDevice?.id === action.payload) {
        state.focusDevice = state.activeDevices[state.activeDevices.length - 1];
      }
    },

    changeFocusDevice: (state, action: PayloadAction<IInstrumentsButtons>) => {
      state.focusDevice = action.payload;
    },
  },
});

export const { reducer: deviceReducer, actions: deviceActions } = deviceSlice;
