import { FC } from "react";
import { IInstrumentsButtons } from "../../../../../shared/Types/device.type";
import { DregWrapper } from "./DragWrapper/DragWrapper";
import { motion, useDragControls } from "framer-motion";
import style from "./DeviceScreen.module.scss";
import { HeadingDevice } from "./HeadingDevice/HeadingDevice";
import { ScreenVNC } from "./ScreenVNC/ScreenVNC";
import { Loading } from "../../../../UI/Loading/Loading";
import { useNoVns } from "./useNoVns";
import { WinResize } from "./WinResize/WinResize";
import { useResizeElement } from "./WinResize/useResizeElement";

export const DeviceScreen: FC<{ device: IInstrumentsButtons }> = ({
  device,
}) => {
  const dragControls = useDragControls();
  const { win, ...onMouseEvent } = useResizeElement(600, 400);
  const noVNC = useNoVns(device);
  return (
    <DregWrapper device={device} dragControls={dragControls}>
      <motion.div
        ref={win}
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
          disconnect={noVNC.disconnect}
        />
        <ScreenVNC device={device} {...noVNC} />
        <WinResize {...onMouseEvent} />
      </motion.div>
    </DregWrapper>
  );
};
