import { expense } from "../../data/data";
import { ExpenseActionTypes } from "../types/actions";
import { Expense } from "../types/Expense";

const expenseReducerDefaultState: Expense[] = [];

const expenseReducer = (state = expenseReducerDefaultState, action: ExpenseActionTypes): Expense[] => {
    switch(action.type) {
        case "GET_EXPENSE":
            console.log('hi');
            console.log(expense);
            return expense;
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "EDIT_EXPENSE":
            return state.map(expense => {
                if (expense.id === action.expense.id) {
                    return {
                        ...expense,
                        ...action.expense,
                    };
                } else {
                    return expense;
                }
            });
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id !== action.id);
        case "SET_EXPENSE":
            return action.expenses;
        default:
            return state;
    }
}

export default expenseReducer;