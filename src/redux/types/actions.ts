import { ADD_EXPENSE, ADD_USER, DECREMENT, EDIT_EXPENSE, GET_CATEGORY, GET_EXPENSE, GET_PRODUCT, GET_PRODUCT_TYPE, INCREMENT, LOGIN, LOGOUT, REMOVE_EXPENSE, SET_EXPENSE } from "../../constants/Constants";
import { Expense, User_Data } from "./Expense";


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

export interface AddUser {
    type: typeof ADD_USER;
    user: User_Data;
}

export interface UserLogin {
    type: typeof LOGIN;
    user: User_Data;
}

export interface UserLogout {
    type: typeof LOGOUT;
    res: boolean;
}

export interface GetCategoryAction {
    type: typeof GET_CATEGORY;
}

export interface GetProductTypes {
    type: typeof GET_PRODUCT_TYPE;
}

export interface GetProducts {
    type: typeof GET_PRODUCT;
}

export type ExpenseActionTypes = GetExpenseAction | SetExpenseAction | EditExpenseAction | AddExpenseAction | RemoveExpenseAction;

export type CounterActionTypes = IncreaseCounter | DecreaseCounter;

export type LoginActionTypes = UserLogin | UserLogout | AddUser;

export type ProductActionTypes = GetCategoryAction;

export type AppAction = ExpenseActionTypes | CounterActionTypes | LoginActionTypes | ProductActionTypes;
