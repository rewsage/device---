import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { MainScreens } from "./App/Components/Screens/MainScreens/MainScreens";
import { MainWrapper } from "./App/Components/Providers/MainWrapper/MainWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainWrapper>
      <MainScreens />
    </MainWrapper>
  </React.StrictMode>
);
