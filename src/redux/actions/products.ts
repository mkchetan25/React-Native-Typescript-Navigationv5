import { Dispatch } from "react";
import { AppState } from "react-native";
import { AppAction } from "../types/actions";

export const getCategory = (): AppAction => ({
    type: "GET_CATEGORY",
});

// export const getProductTypes = (): AppAction => ({
//     type: "GET_PRODUCT_TYPE",
// });

// export const getProducts = (): AppAction => ({
//     type: "GET_PRODUCT",
// });

export const startGetCategories = ( ) => {
    return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
        dispatch(getCategory());
    }
}

// export const startGetProductTypes = ( ) => {
//     return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
//         dispatch(getProductTypes());
//     }
// }

// export const startGetProducts = ( ) => {
//     return (dispatch: Dispatch<AppAction>, getState: () => AppState) => {
//         dispatch(getProducts());
//     }
// }
