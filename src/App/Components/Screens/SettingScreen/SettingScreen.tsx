import { FC } from "react";
import { NavigationSetting } from "./Navigation/NavigationSetting";
import { Outlet } from "react-router-dom";

export const SettingScreen: FC = () => {
  return (
    <div>
      <NavigationSetting />
      <Outlet />
    </div>
  );
};
