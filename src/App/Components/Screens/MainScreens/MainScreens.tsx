import { FC } from "react";
import style from "./MainScreens.module.scss";
import { Menu } from "../../UI/Menu/Menu";
import { menuItemData } from "./MenuItem/MenuItem.data";
import { MenuItem } from "./MenuItem/MenuItem";
import { ControlBlockDevice } from "./ControlBlockDevice/ControlBlockDevice";
import { TestDevice } from "./test.data";
import { TaskBar } from "./TaskBar/TaskBar";
import { AreaDevice } from "./AreaDevice/AreaDevice";

export const MainScreens: FC = () => {
  return (
    <div className={style.screen}>
      <div className={style.menu}>
        <Menu>
          {menuItemData.map((item) => (
            <MenuItem {...item} key={item.link} />
          ))}
        </Menu>
      </div>
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
