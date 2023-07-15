import { FC } from "react";
import style from "./Navigation.module.scss";
import { navigationSettingData } from "./navigation-settings.data";
import { NavigationSettingItem } from "./NavigationSettingItem/NavigationSettingItem";

export const NavigationSetting: FC = () => {
  return (
    <nav className={style.navbar}>
      {navigationSettingData.map((item) => (
        <NavigationSettingItem {...item} key={item.link} />
      ))}
    </nav>
  );
};
