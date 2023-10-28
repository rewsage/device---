import { FC, useEffect, useLayoutEffect, useState } from "react";
import style from "./Network.module.scss";
import {
  useLazyPingByIpQuery,
  usePingAllQuery,
} from "../../../../services/networkApi/networkApi";
import { Grid } from "../../../UI/Grid/Grid";
import { Button } from "../../../UI/Button/Button";
import { useGetAllDevicesQuery } from "../../../../services/deviceApi/device.api";
import { Status } from "../../../UI/Status/Status";
import { Scan } from "./Scan/Scan";
import { IInstrumentsButtons } from "../../../../shared/Types/device.type";
import { LoadingScan } from "./loadingScan/LoadingScan";

type dataNetworks = IInstrumentsButtons & { status: boolean };

export const Network: FC = () => {
  const {
    data: dataDevices,
    isLoading,
    isError,
    refetch: refetchDevice,
  } = useGetAllDevicesQuery();
  const {
    data: pings,
    isLoading: loadingPingAll,
    refetch: refetchPingAll,
  } = usePingAllQuery();
  const [modalScan, setIsModalScan] = useState(false);
  const [data, setData] = useState<dataNetworks[]>([]);
  const [pingId, setPingId] = useState<null | number>(null);
  const [trigger, { isFetching, isSuccess, data: pingData }] =
    useLazyPingByIpQuery();

  useEffect(() => {
    const rec = data.find((item) => item.id === pingId);
    if (rec && pingData && rec.status !== pingData.online) {
      refetchPingAll();
    }
  }, [isSuccess]);

  useLayoutEffect(() => {
    if (!dataDevices || !pings) return;
    setData((prev) =>
      dataDevices.map((item) => ({
        ...item,
        status: pings.hosts.includes(item.host),
      }))
    );
  }, [dataDevices, pings]);

  return (
    <div className={style.network}>
      {modalScan && (
        <Scan isModal={modalScan} setIsModalScan={setIsModalScan} />
      )}
      <Grid
        columns={[
          {
            title: "Host",
            dataIndex: "host",
            width: 250,
          },
          {
            title: "Port",
            dataIndex: "port",
            width: 100,
            editable: true,
          },
          {
            title: "Status",
            dataIndex: "status",
            width: 150,
            renderer(value, record) {
              return isFetching && record.id === pingId ? (
                <LoadingScan />
              ) : (
                <span className={style.status}>
                  <Status value={!!value} />
                </span>
              );
            },
          },
          {
            title: "Actions",
            width: 160,
            dataIndex: "id",
            renderer(value, record) {
              return (
                <span className={style.actions}>
                  <Button
                    icon="radar"
                    disabled={isFetching && record.id === pingId}
                    onClick={() => {
                      setPingId(record.id);
                      trigger(record.host);
                    }}
                  >
                    ping
                  </Button>
                </span>
              );
            },
          },
        ]}
        data={data || []}
        isLoading={isLoading || loadingPingAll}
        textEmpty="Пусто"
        numberingRecord
      />
      <div className={style.bbar}>
        <Button icon="radar" onClick={() => setIsModalScan(true)}>
          Сканировать
        </Button>
      </div>
    </div>
  );
};
