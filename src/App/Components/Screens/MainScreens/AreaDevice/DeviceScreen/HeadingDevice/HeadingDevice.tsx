import { FC } from "react";
import { IInstrumentsButtons } from "../../../../../../shared/Types/device.type";
import style from "./HeadingDevice.module.scss";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { deviceActions } from "../../../../../../store/device/device.slice";
import { DragControls } from "framer-motion";
import { IconLucide } from "../../../../../UI/Icon/Icon";


interface IHeadingDeviceProps {
  device: IInstrumentsButtons;
  dragControls: DragControls;
  disconnect: () => void;
}

export const HeadingDevice: FC<IHeadingDeviceProps> = ({
  device,
  dragControls,
  disconnect,
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
        {/* <button className={style.turn}>-</button> */}
        <button className={style.increase}>
          <IconLucide name="maximize-2" />
        </button>
        <button
          className={style.closed}
          onClick={() => handlerClick(device.id)}
        >
          <IconLucide name="x" />
        </button>
      </div>
    </div>
  );
};
