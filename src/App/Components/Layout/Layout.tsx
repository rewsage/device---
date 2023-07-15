import { FC, PropsWithChildren } from "react";
import style from "./Layout.module.scss";
import { Menu } from "../UI/Menu/Menu";
import { menuItemData } from "./MenuItem/MenuItem.data";
import { MenuItem } from "./MenuItem/MenuItem";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.menu}>
        <Menu>
          {menuItemData.map((item) => (
            <MenuItem {...item} key={item.link} />
          ))}
        </Menu>
      </div>
      {children}
    </div>
  );
};
