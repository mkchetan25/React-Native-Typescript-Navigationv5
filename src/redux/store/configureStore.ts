import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from "redux-thunk";
import expenseReducer from "../reducers/expenses";
import counterReducer from "../reducers/counter";
import { AppAction } from '../types/actions';

export const rootReducer = combineReducers({
    expenses: expenseReducer,
    counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>));