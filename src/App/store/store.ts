import { deviceApi } from "./../services/deviceApi/device.api";
import { configureStore } from "@reduxjs/toolkit";
import { deviceReducer } from "./device/device.slice";
import { networkApi } from "../services/networkApi/networkApi";

export const store = configureStore({
  reducer: {
    [deviceApi.reducerPath]: deviceApi.reducer,
    [networkApi.reducerPath]: networkApi.reducer,
    device: deviceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      deviceApi.middleware,
      networkApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
