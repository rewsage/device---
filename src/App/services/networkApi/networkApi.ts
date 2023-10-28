import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import {
  IResponseGridNetwork,
  IResponsePingAll,
  IResponseScan,
} from "../../shared/Types/device.type";

export const networkApi = createApi({
  reducerPath: "networkApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_NETWORK }),
  endpoints: (build) => ({
    getScan: build.query<IResponseScan, void>({
      query: () => ({
        url: "/scan",
      }),
    }),

    pingAll: build.query<IResponsePingAll, void>({
      query: () => ({
        url: "/pingall",
      }),
    }),

    pingByIp: build.query<{ online: boolean }, string>({
      query: (ip) => ({
        url: `ping/${ip}`,
      }),
      onQueryStarted(arg, api) {

      },
      transformResponse: (response: { online: boolean },) => {

        return response;
      },
    }),

    scanAndPing: build.query<IResponseGridNetwork, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const response = await Promise.all([
          fetchWithBQ("/scan"),
          fetchWithBQ("/pingall"),
        ]);

        if (response[0].error || response[1].error) {
          return {
            error: (response[0].error ||
              response[1].error) as FetchBaseQueryError,
          };
        }
        const resScan = response[0].data as IResponseScan;
        const resPingAll = response[1].data as IResponsePingAll;

        const hosts: { host: string; access: boolean; unknown: boolean }[] = [];
        resScan.hosts.forEach((host) =>
          hosts.push({
            host,
            access: resPingAll.hosts.includes(host),
            unknown: false,
          })
        );
        resScan.unknown_hosts.forEach((host) =>
          hosts.push({
            host,
            access: resPingAll.hosts.includes(host),
            unknown: true,
          })
        );
        return {
          data: { duration: resScan.duration, hosts } as IResponseGridNetwork,
        };
      },
    }),
  }),
});

export const {
  useGetScanQuery,
  usePingAllQuery,
  useLazyPingByIpQuery,
  useScanAndPingQuery,
  useLazyScanAndPingQuery,
} = networkApi;
