import { FC } from "react";
import style from "./MainScreens.module.scss";
import { ControlBlockDevice } from "./ControlBlockDevice/ControlBlockDevice";
import { TestDevice } from "./test.data";
import { TaskBar } from "./TaskBar/TaskBar";
import { AreaDevice } from "./AreaDevice/AreaDevice";

export const MainScreens: FC = () => {
  return (
    <div className={style.screen}>
      {/* <div className={style.buttons}>
        <ControlBlockDevice buttons={TestDevice.sections} />
      </div> */}
      <div className={style.taskbar}>
        <TaskBar />
      </div>
      <AreaDevice />
    </div>
  );
};
