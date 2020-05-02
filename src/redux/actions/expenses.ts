import { Dispatch } from "react";
import { AppState } from "react-native";
import { AppAction } from "../types/actions";
import { Expense } from "../types/Expense";

export const getExpense = (): AppAction => ({
    type: "GET_EXPENSE",
});

export const addExpense = ( expense: Expense): AppAction => ({
    type: "ADD_EXPENSE",
    expense
});

export const editExpense = ( expense: Expense): AppAction => ({
    type: "EDIT_EXPENSE",
    expense
});

export const removeExpense = ( id: string): AppAction => ({
    type: "REMOVE_EXPENSE",
    id
});

export const setExpense = ( expenses: Expense[]): AppAction => ({
    type: "SET_EXPENSE",
    expenses
});

export const startGetExpense = ( ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(getExpense());
    }
}

export const startAddExpense = (expenseData: {id: string, amount: number}) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        const { amount = 0 } = expenseData;

        const expense = { amount };
        const id = "1"

        dispatch(
            addExpense({id, ...expense})
        );
    }
}

export const startRemoveExpense = ( id: string ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(removeExpense(id));
    }
}

export const startEditExpense = ( expense: Expense ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(editExpense(expense));
    }
}

export const startSetExpense = ( expenses: Expense[] ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(setExpense(expenses));
    }
}
