import { FC } from "react";
import { IInstrumentsButtons } from "../../../../../../shared/Types/device.type";
import style from "./HeadingDevice.module.scss";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { deviceActions } from "../../../../../../store/device/device.slice";
import { DragControls } from "framer-motion";
import { Icon, IconLucide } from "../../../../../UI/Icon/Icon";
import cn from "classnames";

interface IHeadingDeviceProps {
  device: IInstrumentsButtons;
  dragControls: DragControls;
  disconnect: () => void;
  openFullScreen: (value: boolean) => void;
  fullScreen: boolean;
}

export const HeadingDevice: FC<IHeadingDeviceProps> = ({
  device,
  dragControls,
  disconnect,
  openFullScreen,
  fullScreen,
}) => {
  const dispatch = useAppDispatch();

  const handlerClick = (id: number) => {
    disconnect();
    dispatch(deviceActions.removeActiveDevice(id));
  };
  return (
    <div
      className={style.heading}
      onPointerDown={(event) => dragControls.start(event)}
    >
      <div className={style.name}>{device.name}</div>
      <div className={style.buttons}>
        <button className={style.increase} onClick={() => openFullScreen(true)}>
          <Icon name="maximize" />
        </button>
        <button
          className={style.closed}
          onClick={() => handlerClick(device.id)}
        >
          <Icon name="x" />
        </button>
      </div>
    </div>
  );
};
