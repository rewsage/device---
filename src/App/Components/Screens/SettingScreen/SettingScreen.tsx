import { FC } from "react";
import { NavigationSetting } from "./Navigation/NavigationSetting";
import { Outlet } from "react-router-dom";
import { Confirm } from "../../UI/Msg/Confirm/Confirm";

export const SettingScreen: FC = () => {
  return (
    <div>
      {true && (
        <Confirm
          fn={() => {}}
          text="Прибор будет без возвратно удален. Продолжить?"
          title="Удаление"
          type="delete"
        />
      )}
      <NavigationSetting />
      <Outlet />
    </div>
  );
};
