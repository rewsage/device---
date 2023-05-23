import { FC } from "react";
import style from "./ItemActiveDevice.module.scss";
import { IInstrumentsButtons } from "../../../../../shared/Types/device.type";
import { Icon } from "../../../../UI/Icon/Icon";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { deviceActions } from "../../../../../store/device/device.slice";

export const ItemActiveDevice: FC<{ device: IInstrumentsButtons }> = ({
  device,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={style.active_device}
      onClick={() => dispatch(deviceActions.changeFocusDevice(device))}
    >
      <Icon name="device" />
    </div>
  );
};
