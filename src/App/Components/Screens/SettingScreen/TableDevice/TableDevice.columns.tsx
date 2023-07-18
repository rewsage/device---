import { IInstrumentsButtons } from "../../../../shared/Types/device.type";
import { Button } from "../../../UI/Button/Button";
import { IColumn } from "../../../UI/Grid/Grid.interface";
import { Icon } from "../../../UI/Icon/Icon";
import style from "./TableDevice.module.scss";

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
      return (
        <span className={style.actions}>
          <Button>
            <Icon name="edit" className={style.button_edit} />
          </Button>
          <Button>
            <Icon name="delete" className={style.button_delete} />
          </Button>
        </span>
      );
    },
  },
];
