import { useState } from "react";
import { IInstrumentsButtons } from "../../../../shared/Types/device.type";
import { Button } from "../../../UI/Button/Button";
import { IColumn } from "../../../UI/Grid/Grid.interface";
import { Icon } from "../../../UI/Icon/Icon";
import style from "./TableDevice.module.scss";
import { Confirm } from "../../../UI/Msg/Confirm/Confirm";
import { useRemoveDeviceMutation } from "../../../../services/deviceApi/device.api";

export const columnsDevice: IColumn<IInstrumentsButtons>[] = [
  {
    title: "Model",
    dataIndex: "name",
    width: 250,
    editable: true,
  },
  {
    title: "Token",
    dataIndex: "token",
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
      const [conf, setConf] = useState(false);
      const [trigger] = useRemoveDeviceMutation();
      return (
        <span className={style.actions}>
          <Button flat>
            <Icon name="edit" className={style.button_edit} />
          </Button>
          <Button flat onClick={() => setConf(true)}>
            <Icon name="delete" className={style.button_delete} />
          </Button>
          {conf && (
            <Confirm
              type="delete"
              title="Удаление"
              text="Данный прибор будет безвозвратно удален. Продолжить?"
              fn={() => {
                console.log(value);
                if (typeof value === "number") {
                  trigger(value);
                }
              }}
              show={setConf}
            />
          )}
        </span>
      );
    },
  },
];
