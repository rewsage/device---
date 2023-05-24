import { FC } from "react";
import { IInstrumentsButtons } from "../../../../../shared/Types/device.type";
import { DregWrapper } from "./DragWrapper/DragWrapper";
import { motion, useDragControls } from "framer-motion";
import style from "./DeviceScreen.module.scss";
import { HeadingDevice } from "./HeadingDevice/HeadingDevice";
import { ScreenVNC } from "./ScreenVNC/ScreenVNC";
import { Loading } from "../../../../UI/Loading/Loading";
import { useNoVns } from "./useNoVns";

export const DeviceScreen: FC<{ device: IInstrumentsButtons }> = ({
  device,
}) => {
  const dragControls = useDragControls();
  const { disconnect, loading, screen } = useNoVns(device);
  return (
    <DregWrapper device={device} dragControls={dragControls}>
      <motion.div
        className={style.device}
        tabIndex={0}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
      >
        <HeadingDevice
          device={device}
          dragControls={dragControls}
          disconnect={disconnect}
        />
        <ScreenVNC device={device} loading={loading} screen={screen} />
      </motion.div>
    </DregWrapper>
  );
};
