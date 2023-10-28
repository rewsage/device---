import { FC, useEffect, useState } from "react";
import style from "./TableDevice.module.scss";
import {
  useGetAllDevicesQuery,
  useRemoveDeviceMutation,
} from "../../../../services/deviceApi/device.api";
import { Grid } from "../../../UI/Grid/Grid";
import { columnsDevice } from "./TableDevice.columns";
import { Icon } from "../../../UI/Icon/Icon";
import { Link } from "react-router-dom";
import { NotifyWrapper } from "../../../UI/Notify/NotifyWrapper";
import { Button } from "../../../UI/Button/Button";
import { Confirm } from "../../../UI/Msg/Confirm/Confirm";

export const TableDevice: FC = () => {
  const { data, isLoading, isError } = useGetAllDevicesQuery();
  const [remove] = useRemoveDeviceMutation();
  const [conf, setConf] = useState<null | number>(null);

  return (
    <div className={style.content}>
      {conf !== null && (
        <Confirm
          type="delete"
          title="Удаление"
          text="Данный прибор будет безвозвратно удален. Продолжить?"
          fn={() => remove(conf)}
          show={() => setConf(null)}
        />
      )}
      <Grid
        columns={[
          {
            title: "Model",
            dataIndex: "name",
            width: 250,
            editable: true,
          },
          {
            title: "Token",
            dataIndex: "id",
            width: 100,
            editable: true,
          },
          {
            title: "Host",
            dataIndex: "host",
            width: 200,
            editable: true,
          },
          {
            title: "Port",
            dataIndex: "port",
            width: 100,
            editable: true,
          },
          {
            width: 150,
            title: "Actions",
            dataIndex: "id",
            renderer(value, record) {
              console.log(record);
              return (
                <span className={style.actions}>
                  <Button flat>
                    <Link to={`/constructor/${record.id}`}>
                      <Icon name="edit" className={style.button_edit} />
                    </Link>
                  </Button>
                  <Button flat onClick={() => setConf(record.id)}>
                    <Icon name="delete" className={style.button_delete} />
                  </Button>
                </span>
              );
            },
          },
        ]}
        data={data || []}
        isLoading={isLoading}
        textEmpty="Пусто"
        numberingRecord
      />
      <div className={style.bbar}>
        <Link to={"/constructor/new"}>
          <Icon name="add" className={style.icon} />
        </Link>
      </div>
    </div>
  );
};
