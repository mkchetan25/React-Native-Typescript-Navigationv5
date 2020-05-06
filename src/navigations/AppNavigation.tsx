import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import Cartscreen from "../screens/cart/Cartscreen";
import CounterPage from "../screens/counter/CounterPage";
import ExpensePage from "../screens/expense/ExpensePage";
import Homescreen from "../screens/home/HomeScreen";
import Loginscreen from "../screens/login/Login";
import CategoryListScreen from "../screens/products/CategoryListScreen";
import Profilescreen from "../screens/profile/Profilescreen";
import { CartStackParamList, CategoryStackParamList, DrawerParamList, HomeStackParamList, ProfileStackParamList, TabParamList } from "./types";

const HomeStack = createStackNavigator<HomeStackParamList>();
const CategoryStack = createStackNavigator<CategoryStackParamList>();
const CartStack = createStackNavigator<CartStackParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();

export const HomeStackNavigation: FC = ({}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Homescreen}/>
      <HomeStack.Screen name="ProductList" component={ExpensePage} options={{
        headerShown: false
      }}/>
      <HomeStack.Screen name="Product" component={CounterPage}/>
    </HomeStack.Navigator>
  );
};

export const CategoryStackNavigation: FC = ({}) => {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen name="CategoryList" component={CategoryListScreen}/>
      <CategoryStack.Screen name="ProductList" component={ExpensePage} options={{
        headerShown: false
      }}/>
      <CategoryStack.Screen name="Product" component={CounterPage}/>
    </CategoryStack.Navigator>
  );
};

export const CartStackNavigation: FC = ({}) => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen name="Cart" component={Cartscreen}/>
      <CartStack.Screen name="Login" component={Loginscreen} options={{
        headerShown: false
      }}/>
    </CartStack.Navigator>
  );
};

export const ProfileStackNavigation: FC = ({}) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Login" component={Loginscreen}/>
      <ProfileStack.Screen name="Profile" component={Profilescreen} options={{
        headerShown: false
      }}/>
    </ProfileStack.Navigator>
  );
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigation: FC = ({}) => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackNavigation}  />
        <Drawer.Screen name="Login" component={Loginscreen} />
    </Drawer.Navigator>
  );
};

const Tabs = createBottomTabNavigator<TabParamList>();

export const HomeTabNavigation: FC = ({}) => {
  return (
    <Tabs.Navigator initialRouteName="HomeNavigator">
        <Tabs.Screen name="HomeNavigator" component={HomeStackNavigation}/>
        <Tabs.Screen name="CategoryNavigator" component={CategoryStackNavigation} />
        <Tabs.Screen name="CartNavigator" component={CartStackNavigation} />
        <Tabs.Screen name="ProfileNavigator" component={DrawerNavigation} />
    </Tabs.Navigator>
  );
};
