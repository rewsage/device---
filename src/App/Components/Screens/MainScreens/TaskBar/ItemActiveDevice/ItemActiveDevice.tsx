import { FC } from "react";
import style from "./ItemActiveDevice.module.scss";
import { IInstrumentsButtons } from "../../../../../shared/Types/device.type";
import { Icon } from "../../../../UI/Icon/Icon";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { useStateSelector } from "../../../../../hooks/useStateSelector";
import { deviceActions } from "../../../../../store/device/device.slice";
import { motion } from "framer-motion";

export const ItemActiveDevice: FC<{ device: IInstrumentsButtons }> = ({
  device,
}) => {
  const dispatch = useAppDispatch();
  const focusDevice = useStateSelector((store) => store.device.focusDevice);

  const isSelected = focusDevice?.id === device.id;
  return (
    <motion.div
      className={style.active_device}
      onClick={() => dispatch(deviceActions.changeFocusDevice(device))}
      initial={{ backgroundColor: "" }}
      animate={{ backgroundColor: isSelected ? "rgb(120, 130, 135)" : "" }}
    >
      <Icon name="device" />
      {isSelected && (
        <motion.div
          className={style.active_line}
          layoutId="activeLineDevice"
        ></motion.div>
      )}
    </motion.div>
  );
};
