import { FC, PropsWithChildren } from "react";
import style from "./MainWrapper.module.scss";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "../Routing/Routing";
import { Provider } from "react-redux";
import { store } from "../../../store/store";

export const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={style.wrapper}>{children}</div>
      </BrowserRouter>
    </Provider>
  );
};
