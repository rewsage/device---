import { deviceApi } from "./device.api";

export const buttonsApi = deviceApi.injectEndpoints({
  endpoints: (build) => ({
    handleButton: build.query<void, number>({
      query: (id) => ({
        url: `button-device/click/${id}`,
      }),
    }),
  }),
});

export const { useLazyHandleButtonQuery} = buttonsApi;
