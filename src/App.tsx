import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import { Provider } from "react-redux";
// import DrawerNavigation from "./navigations/DrawerNavigation";
import { HomeTabNavigation } from "./navigations/AppNavigation";
import { store } from "./redux/store/configureStore";

const App: FC = ({}) => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeTabNavigation></HomeTabNavigation>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
