import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type HomeParamList = {
    Home: undefined;
    Counter: undefined;
    Expense: undefined;
}

export type HomeStackNavProps<T extends keyof HomeParamList> = {
    navigation: StackNavigationProp<HomeParamList, T>;
    route: RouteProp<HomeParamList, T>;
}