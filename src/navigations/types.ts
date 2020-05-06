import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type TabParamList = {
    HomeNavigator: undefined;
    CategoryNavigator: undefined;
    CartNavigator: undefined;
    ProfileNavigator: undefined;
}

export type DrawerParamList = {
    Home: undefined;
    Login: undefined;
}

export type HomeStackParamList = {
    Home: undefined;
    ProductList: undefined;
    Product: undefined;
}

export type CategoryStackParamList = {
    CategoryList: undefined;
    ProductList: undefined;
    Product: undefined;
}

export type CartStackParamList = {
    Cart: undefined;
    Login: undefined;
    Register: undefined;
    MyOrder: undefined;
}

export type ProfileStackParamList = {
    Profile: undefined;
    Login: undefined;
    Logout: undefined;
    Register: undefined;
    MyOrder: undefined;
    About: undefined;
}

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
    navigation: StackNavigationProp<HomeStackParamList, T>;
    route: RouteProp<HomeStackParamList, T>;
}

export type CategoryStackNavProps<T extends keyof CategoryStackParamList> = {
    navigation: StackNavigationProp<CategoryStackParamList, T>;
    route: RouteProp<CategoryStackParamList, T>;
}

export type CartStackNavProps<T extends keyof CartStackParamList> = {
    navigation: StackNavigationProp<CartStackParamList, T>;
    route: RouteProp<CartStackParamList, T>;
}

export type ProfileStackNavProps<T extends keyof ProfileStackParamList> = {
    navigation: StackNavigationProp<ProfileStackParamList, T>;
    route: RouteProp<ProfileStackParamList, T>;
}

export type DrawerNavProps<T extends keyof DrawerParamList> = {
    navigation: DrawerNavigationProp<DrawerParamList, T>;
    route: RouteProp<DrawerParamList, T>;
}

export type TabNavProps<T extends keyof TabParamList> = {
    navigation: BottomTabNavigationProp<TabParamList, T>;
    route: RouteProp<TabParamList, T>;
}
