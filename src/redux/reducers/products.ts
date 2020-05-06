import { categories } from "../../data/data";
import { ProductActionTypes } from "../types/actions";
import { Category } from "../types/Expense";

const expenseReducerDefaultState: Category[] = [];

const categoryReducer = (state = expenseReducerDefaultState, action: ProductActionTypes): Category[] => {
    console.log(`action is ${action.type}`)
    switch(action.type) {
        case "GET_CATEGORY":
            return categories;
        default:
            return state;
    }
}

export default categoryReducer;

// const productTypeReducerDefaultState: ProductType[] = [];

// export const productTypeReducer = (state = productTypeReducerDefaultState, action: ProductActionTypes): ProductType[] => {
//     console.log(`hi ${action.type}`);
//     switch(action.type) {
//         case "GET_PRODUCT_TYPE":
//             console.log(`in reducer ${productTypes}`);
//             return productTypes;
//         default:
//             return state;
//     }
// }

// const productReducerDefaultState: Product[] = [];

// export const productReducer = (state = productReducerDefaultState, action: ProductActionTypes): ProductType[] => {
//     switch(action.type) {
//         case "GET_PRODUCT":
//             console.log(`reducers ${products}`);
//             return products;
//         default:
//             return state;
//     }
// }
