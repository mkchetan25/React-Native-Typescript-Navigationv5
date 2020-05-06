import { Dispatch } from "react";
import { AppState } from "react-native";
import { AppAction } from "../types/actions";
import { User_Data } from "../types/Expense";

export const login = (user: User_Data): AppAction => ({
    type: "LOGIN_SUCCESS",
    user
});

export const logout = (): AppAction => ({
    type: "LOGOUT",
    res: true
});

export const registerUser = (user: User_Data): AppAction => ({
    type: "ADD_USER",
    user
});

export const startLogin = ( user: User_Data ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(login(user));
    }
}

export const startLogout = ( ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(logout());
    }
}

export const startRegister = ( user: User_Data ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(registerUser(user));
    }
}
