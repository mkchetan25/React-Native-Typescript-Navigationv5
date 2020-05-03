import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import Counterscreen from "../components/counter/CounterPage";
import Expensescreen from "../components/expense/ExpensePage";
import Homescreen from "../components/home/HomeScreen";
import { HomeParamList } from "./HomeStackParamList";

const Stack = createStackNavigator<HomeParamList>();

const HomStackNavigation: FC = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Expense" component={Expensescreen}/>
        <Stack.Screen name="Counter" component={Counterscreen}/>
    </Stack.Navigator>
  );
};
export default HomStackNavigation;
