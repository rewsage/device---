import { FC, PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "../Routing/Routing";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { Layout } from "../../Layout/Layout";
import "../../UI/Combobox/react-select.scss";

import DragProvider from "../DragProvider/DragProvider";
import { ErrorProvider } from "../ErrorProvider/ErrorProvider";
import { NotifyProvider } from "../NotifyProvider/NotifyProvider";

export const MainWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <DragProvider>
          <NotifyProvider>
            <ErrorProvider>
              <Layout>
                <Routing />
              </Layout>
            </ErrorProvider>
          </NotifyProvider>
        </DragProvider>
      </BrowserRouter>
    </Provider>
  );
};
