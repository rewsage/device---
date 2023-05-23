import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../axios";
import { IInstrumentsButtons } from "../../shared/Types/device.type";

export const deviceApi = createApi({
  reducerPath: "deviceApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getAllDevices: build.query<IInstrumentsButtons[], void>({
      query: () => ({
        url: "/devices",
      }),
    }),
  }),
});

export const { useGetAllDevicesQuery } = deviceApi;
