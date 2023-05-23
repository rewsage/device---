import { FC } from "react";
import style from "./AreaDevice.module.scss";
import { useStateSelector } from "../../../../hooks/useStateSelector";
import { DeviceScreen } from "./DeviceScreen/DeviceScreen";

export const AreaDevice: FC = () => {
  const activeDevice = useStateSelector((state) => state.device.activeDevices);
  return (
    <div className={style.area}>
      {activeDevice.map((item) => (
        <DeviceScreen device={item} key={item.id} />
      ))}
    </div>
  );
};
