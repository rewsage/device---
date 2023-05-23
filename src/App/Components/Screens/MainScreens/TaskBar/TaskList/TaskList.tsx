import { FC } from "react";
import style from "./TaskList.module.scss";
import { IInstrumentsButtons } from "../../../../../shared/Types/device.type";
import { deviceActions } from "../../../../../store/device/device.slice";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { useStateSelector } from "../../../../../hooks/useStateSelector";
import { Portal } from "../../../../Providers/Portal/Portal";

interface ITaskListProps {
  items: IInstrumentsButtons[];
  onClick: (open: boolean) => void;
}

export const TaskList: FC<ITaskListProps> = ({ items, onClick }) => {
  const dispatch = useAppDispatch();
  const activeDevice = useStateSelector((state) => state.device.activeDevices);

  const addActiveDevice = (device: IInstrumentsButtons) => {
    dispatch(deviceActions.addActiveDevice(device));
    onClick(false);
  };
  return (
    <>
      <Portal>
        <div className={style.backdrop} onClick={() => onClick(false)}></div>
      </Portal>
      <div className={style.list}>
        {items.map((item) => (
          <button
            disabled={activeDevice.includes(item)}
            className={style.name_device}
            onClick={() => addActiveDevice(item)}
            key={item.id}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
};
