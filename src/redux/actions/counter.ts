import { Dispatch } from "react";
import { AppState } from "react-native";
import { AppAction } from "../types/actions";
import { Counter } from "../types/Expense";

export const countIncrease = (counter: Counter): AppAction => ({
    type: "INCREMENT",
    count: counter.count
});

export const countDecrease = (counter: Counter): AppAction => ({
    type: "DECREMENT",
    count: counter.count
});

export const startIncreaseCounter = ( counter: Counter ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(countIncrease(counter));
    }
}

export const startDecreaseCounter = ( counter: Counter ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(countDecrease(counter));
    }
}
