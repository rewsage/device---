import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../axios";
import { IInstrumentsButtons } from "../../shared/Types/device.type";
import { IConstructor } from "../../Components/Screens/SettingScreen/ConstructorDevice/ConstructorDevice.interface";

export const deviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: baseQuery,
  tagTypes: ["Devices"],
  endpoints: (build) => ({
    getAllDevices: build.query<IInstrumentsButtons[], void>({
      query: () => ({
        url: "devices",
      }),
      providesTags: ["Devices"],
    }),

    getDevice: build.query<IInstrumentsButtons, number>({
      query: (id) => ({
        url: `devices/${id}`,
      }),
    }),

    removeDevice: build.mutation<IInstrumentsButtons, number>({
      query: (id) => ({
        url: `devices/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Devices"],
    }),

    updateDevice: build.mutation<
      IInstrumentsButtons,
      { id: number; data: IConstructor }
    >({
      query: ({ id, data }) => ({
        url: `devices/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Devices"],
    }),

    createDevice: build.mutation<IInstrumentsButtons, { data: IConstructor }>({
      query: ({ data }) => ({
        url: "devices/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Devices"],
    }),

    getButtons: build.query<void, string>({
      query: (host) => ({
        url: `devices/getButtons/${host}`,
      }),
    }),
  }),
});

export const {
  useGetAllDevicesQuery,
  useRemoveDeviceMutation,
  useGetDeviceQuery,
  useCreateDeviceMutation,
  useUpdateDeviceMutation,
  useLazyGetButtonsQuery,
} = deviceApi;
