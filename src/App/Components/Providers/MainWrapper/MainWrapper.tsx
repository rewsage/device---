import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "../Routing/Routing";
import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { Layout } from "../../Layout/Layout";

export const MainWrapper: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
