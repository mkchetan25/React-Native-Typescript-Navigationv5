import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC } from "react";
import Aboutscreen from "../components/about/AboutScreen";
import { AppParamList } from "./AppParamList";
import HomStackNavigation from "./HomeStackNavigation";

const Tabs = createBottomTabNavigator<AppParamList>();

const AppNavigation: FC = ({}) => {
  return (
    <NavigationContainer >
        <Tabs.Navigator initialRouteName="Home">
            <Tabs.Screen name="Home" component={HomStackNavigation}
                options={({title: "test"})} />
            <Tabs.Screen name="About" component={Aboutscreen} />
        </Tabs.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
