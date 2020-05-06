import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';
// import DrawerNavigation from "./navigations/DrawerNavigation";
import { HomeTabNavigation } from "./navigations/AppNavigation";
import { persistor, store } from "./redux/store/configureStore";

const App: FC = ({}) => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <HomeTabNavigation></HomeTabNavigation>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
