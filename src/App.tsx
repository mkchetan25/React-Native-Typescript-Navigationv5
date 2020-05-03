import React, { FC } from "react";
import { Provider } from "react-redux";
import AppNavigation from "./navigations/AppNavigation";
import { store } from "./redux/store/configureStore";

const App: FC = ({}) => {

  return (
    <Provider store={store}>
      <AppNavigation></AppNavigation>
    </Provider>
  );
};
export default App;
