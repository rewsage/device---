import { FC } from "react";
import style from "./Heading.module.scss";
import { Icon } from "../../../../../../UI/Icon/Icon";
import { IInstrumentsButtons } from "../../../../../../../shared/Types/device.type";
import { useAppDispatch } from "../../../../../../../hooks/useAppDispatch";
import { deviceActions } from "../../../../../../../store/device/device.slice";

interface IHeading {
  device: IInstrumentsButtons;
  closeFullscreen: (val: boolean) => void;
  disconnect: () => void;
}

export const Heading: FC<IHeading> = ({
  device,
  disconnect,
  closeFullscreen,
}) => {
  const dispatch = useAppDispatch();

  const handlerClick = (id: number) => {
    disconnect();
    dispatch(deviceActions.removeActiveDevice(id));
    closeFullscreen(false);
  };

  return (
    <div className={style.heading}>
      <div className={style.name}>{device.name}</div>
      <div className={style.buttons}>
        <button
          className={style.increase}
          onClick={() => closeFullscreen(false)}
        >
          <Icon name="minimize" />
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
