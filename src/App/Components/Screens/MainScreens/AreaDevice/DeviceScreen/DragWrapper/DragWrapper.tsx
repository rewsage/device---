import { FC, PropsWithChildren, RefObject } from "react";
import { DragControls, motion, useDragControls } from "framer-motion";
import { useResize } from "../../../../../../hooks/useResize";
import style from "./DragWrapper.module.scss";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { useStateSelector } from "../../../../../../hooks/useStateSelector";
import { deviceActions } from "../../../../../../store/device/device.slice";
import { IInstrumentsButtons } from "../../../../../../shared/Types/device.type";

interface IDragWrapper {
  device: IInstrumentsButtons;
  dragControls: DragControls;
}

export const DregWrapper: FC<PropsWithChildren<IDragWrapper>> = ({
  children,
  device,
  dragControls,
}) => {
  const { width, height } = useResize();
  const dispatch = useAppDispatch();
  const focusDevice = useStateSelector((state) => state.device.focusDevice);

  return (
    <motion.div
      className={style.drag}
      drag
      dragControls={dragControls}
      whileDrag={{ scale: 1.02 }}
      dragElastic={0.3}
      dragListener={false}
      dragMomentum={false}
      dragConstraints={{
        top: -height / 2,
        bottom: height / 2,
        left: -width / 2,
        right: width / 2,
      }}
      style={focusDevice?.id === device.id ? { zIndex: 10 } : { zIndex: 1 }}
      onFocus={() => dispatch(deviceActions.changeFocusDevice(device))}
    >
      {children}
    </motion.div>
  );
};
