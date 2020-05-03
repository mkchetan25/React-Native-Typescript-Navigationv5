import { RouteProp } from "@react-navigation/native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"

export type AppParamList = {
    Home: undefined;
    About: undefined;
}

export type HomeStackNavProps<T extends keyof AppParamList> = {
    navigation: BottomTabNavigationProp<AppParamList, T>;
    route: RouteProp<AppParamList, T>;
}