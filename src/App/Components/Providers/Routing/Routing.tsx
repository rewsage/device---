import { FC} from "react";
import { Routes, Route } from "react-router-dom";
import { MainScreens } from "../../Screens/MainScreens/MainScreens";
import { SettingScreen } from "../../Screens/SettingScreen/SettingScreen";

export const Routing: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreens />} />
        <Route path="/setting/*" element={<SettingScreen />} />
      </Routes>
    </>
  );
};
