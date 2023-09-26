import { FC, useEffect } from "react";
import style from "./TableDevice.module.scss";
import { useGetAllDevicesQuery } from "../../../../services/deviceApi/device.api";
import { Grid } from "../../../UI/Grid/Grid";
import { columnsDevice } from "./TableDevice.columns";
import { Icon } from "../../../UI/Icon/Icon";
import { Link } from "react-router-dom";
import { NotifyWrapper } from "../../../UI/Notify/NotifyWrapper";

export const TableDevice: FC = () => {
  const { data, isLoading, isError } = useGetAllDevicesQuery();
  useEffect(() => {
    if (isError) {

    }
  }, [isError]);

  return (
    <div className={style.content}>
      <Grid
        columns={columnsDevice}
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
