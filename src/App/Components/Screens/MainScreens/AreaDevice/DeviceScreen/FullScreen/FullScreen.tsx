import { FC, useEffect } from "react";
import style from "./FullScreen.module.scss";
import { Portal } from "../../../../../Providers/Portal/Portal";
import { IFullScreen } from "./FullScreen.interface";
import { Heading } from "./Heading/Heading";
import { Screen } from "./Screen/Screen";
import { Buttons } from "./Buttons/Buttons";

export const FullScreen: FC<IFullScreen> = (props) => {
  useEffect(() => {
    props.connect();
    return () => props.disconnect();
  }, []);
  return (
    <Portal>
      <div className={style.fullscreen}>
        <Heading {...props} />
        <div className={style.body_device}>
          <Screen {...props} onResize={false} ref={props.screen} />
          <div className={style.buttons}>
            <Buttons device={props.device} />
          </div>
        </div>
      </div>
    </Portal>
  );
};
