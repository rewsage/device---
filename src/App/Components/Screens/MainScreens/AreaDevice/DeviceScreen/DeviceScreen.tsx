import { FC, useState } from "react";
import { IInstrumentsButtons } from "../../../../../shared/Types/device.type";
import { DregWrapper } from "./DragWrapper/DragWrapper";
import { motion, useDragControls } from "framer-motion";
import style from "./DeviceScreen.module.scss";
import { HeadingDevice } from "./HeadingDevice/HeadingDevice";
import { ScreenVNC } from "./ScreenVNC/ScreenVNC";
import { useNoVns } from "./useNoVns";
import { WinResize } from "./WinResize/WinResize";
import { useResizeElement } from "./WinResize/useResizeElement";
import { FullScreen } from "./FullScreen/FullScreen";

export const DeviceScreen: FC<{ device: IInstrumentsButtons }> = ({
  device,
}) => {
  const dragControls = useDragControls();
  const { win, onResize, ...onMouseEvent } = useResizeElement(600, 400);
  const noVNC = useNoVns(device);
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <>
      {fullScreen && (
        <FullScreen
          {...noVNC}
          device={device}
          closeFullscreen={setFullScreen}
        />
      )}
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
            openFullScreen={setFullScreen}
            fullScreen={fullScreen}
          />
          {!fullScreen && (
            <ScreenVNC
              disconnect={noVNC.disconnect}
              onResize={onResize}
              connect={noVNC.connect}
              connected={noVNC.connected}
              loading={noVNC.loading}
              ref={noVNC.screen}
            />
          )}

          <WinResize {...onMouseEvent} />
        </motion.div>
      </DregWrapper>
    </>
  );
};
