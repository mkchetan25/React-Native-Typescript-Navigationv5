import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk, { ThunkMiddleware } from "redux-thunk";
import counterReducer from "../reducers/counter";
import expenseReducer from "../reducers/expenses";
import loginReducer from '../reducers/login';
import categoryReducer from '../reducers/products';
import { AppAction } from '../types/actions';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

export const rootReducer = combineReducers({
    expenses: expenseReducer,
    counter: counterReducer,
    categories: categoryReducer,
    login: loginReducer,
    // productTypes: productTypeReducer,
    // products: productReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const pReducer = persistReducer<AppState, AppAction>(persistConfig, rootReducer);

// export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>));
export const store = createStore(pReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppAction>));

export const persistor = persistStore(store);