import { FC } from "react";
import { IInstrumentsButtons } from "../../../../../../shared/Types/device.type";
import style from "./HeadingDevice.module.scss";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { deviceActions } from "../../../../../../store/device/device.slice";

export const HeadingDevice: FC<{ device: IInstrumentsButtons }> = ({
  device,
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.heading}>
      <div className={style.name}>{device.name}</div>
      <div className={style.buttons}>
        <button className={style.turn}>-</button>
        <button className={style.increase}>+</button>
        <button
          className={style.closed}
          onClick={() => dispatch(deviceActions.removeActiveDevice(device.id))}
        >
          +
        </button>
      </div>
    </div>
  );
};
