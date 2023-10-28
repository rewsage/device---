import { useLazyPingByIpQuery } from "../../../../services/networkApi/networkApi";
import { Button } from "../../../UI/Button/Button";
import { IColumn } from "../../../UI/Grid/Grid.interface";
import { Icon } from "../../../UI/Icon/Icon";
import { Status } from "../../../UI/Status/Status";
import style from "./Network.module.scss";

export const networkColumns: IColumn<{
  host: string;
  access: boolean;
  unknown: boolean;
}>[] = [
  {
    title: "Host",
    dataIndex: "host",
    width: 250,
  },
  {
    title: "Status",
    dataIndex: "access",
    width: 150,
    renderer(value, record) {
      return (
        <span className={style.status}>
          <Status value={!!value} />
        </span>
      );
    },
  },
  {
    title: "Actions",
    width: 160,
    dataIndex: "unknown",
    renderer(value, record) {
      const [trigger, { isFetching, data }] = useLazyPingByIpQuery();

      return (
        <span className={style.actions}>
          <Button
            icon="radar"
            disabled={isFetching}
            onClick={() => trigger(record.host)}
          >
            ping
          </Button>
          {!!value ? (
            <Button icon="plus" flat tooltip="Создать" />
          ) : (
            <Button flat tooltip="Обновить">
              <Icon name="edit" className={style.button_edit} />
            </Button>
          )}
        </span>
      );
    },
  },
];
