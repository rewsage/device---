import { FC, useState } from "react";
import style from "./TaskBar.module.scss";
import { Icon } from "../../../UI/Icon/Icon";
import { TaskList } from "./TaskList/TaskList";
import { useGetAllDevicesQuery } from "../../../../services/deviceApi/device.api";
import { useStateSelector } from "../../../../hooks/useStateSelector";
import { ItemActiveDevice } from "./ItemActiveDevice/ItemActiveDevice";

export const TaskBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: devices, isLoading } = useGetAllDevicesQuery();
  const activeDevices = useStateSelector((state) => state.device.activeDevices);

  return (
    <div className={style.bar}>
      <div className={style.container_device}>
        <div className={style.container_active_device}>
          {activeDevices.map((device) => (
            <ItemActiveDevice device={device} key={device.id} />
          ))}
        </div>
        <button disabled={isLoading} onClick={() => setIsOpen(true)}>
          <Icon name="plus" />
        </button>
      </div>

      {isOpen && <TaskList items={devices || []} onClick={setIsOpen} />}
    </div>
  );
};
