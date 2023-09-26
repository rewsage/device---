import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "../Routing/Routing";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { Layout } from "../../Layout/Layout";
import "../../UI/Combobox/react-select.scss";
import { NotifyWrapper } from "../../UI/Notify/NotifyWrapper";
import DragProvider from "../DragProvider/DragProvider";

export const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DragProvider>
          <NotifyWrapper>
            <Layout>
              <Routing />
            </Layout>
          </NotifyWrapper>
        </DragProvider>
      </BrowserRouter>
    </Provider>
  );
};
