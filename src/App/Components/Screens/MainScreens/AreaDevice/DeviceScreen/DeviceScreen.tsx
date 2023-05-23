import { FC } from "react";
import { IInstrumentsButtons } from "../../../../../shared/Types/device.type";
import { DregWrapper } from "./DragWrapper/DragWrapper";
import { motion } from "framer-motion";
import style from "./DeviceScreen.module.scss";
import { HeadingDevice } from "./HeadingDevice/HeadingDevice";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { useStateSelector } from "../../../../../hooks/useStateSelector";
import { deviceActions } from "../../../../../store/device/device.slice";

export const DeviceScreen: FC<{ device: IInstrumentsButtons }> = ({
  device,
}) => {
  return (
    <DregWrapper device={device}>
      <motion.div
        className={style.device}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        tabIndex={0}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
      >
        <HeadingDevice device={device} />
      </motion.div>
    </DregWrapper>
  );
};
