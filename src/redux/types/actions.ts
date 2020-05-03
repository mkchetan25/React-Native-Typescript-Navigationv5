import { Expense } from "./Expense";

export const GET_EXPENSE = "GET_EXPENSE";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const EDIT_EXPENSE = "EDIT_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";
export const SET_EXPENSE = "SET_EXPENSE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface GetExpenseAction {
    type: typeof GET_EXPENSE;
}

export interface SetExpenseAction {
    type: typeof SET_EXPENSE;
    expenses: Expense[];
}

export interface AddExpenseAction {
    type: typeof ADD_EXPENSE;
    expense: Expense;
}

export interface EditExpenseAction {
    type: typeof EDIT_EXPENSE;
    expense: Expense;
}

export interface RemoveExpenseAction {
    type: typeof REMOVE_EXPENSE;
    id: string;
}

export interface IncreaseCounter {
    type: typeof INCREMENT;
    count: number;
}

export interface DecreaseCounter {
    type: typeof DECREMENT;
    count: number;
}

export type ExpenseActionTypes = GetExpenseAction | SetExpenseAction | EditExpenseAction | AddExpenseAction | RemoveExpenseAction;

export type CounterActionTypes = IncreaseCounter | DecreaseCounter;

export type AppAction = ExpenseActionTypes | CounterActionTypes;
