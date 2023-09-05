import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MainScreens } from "../../Screens/MainScreens/MainScreens";
import { SettingScreen } from "../../Screens/SettingScreen/SettingScreen";
import { TableDevice } from "../../Screens/SettingScreen/TableDevice/TableDevice";
import ConstructorDevice from "../../Screens/SettingScreen/ConstructorDevice/ConstructorDevice";

export const Routing: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreens />} />
        <Route path="/setting/*" element={<SettingScreen />}>
          <Route path="devices" element={<TableDevice />}></Route>
        </Route>
        <Route path="constructor/new" element={<ConstructorDevice />} />
      </Routes>
    </>
  );
};
