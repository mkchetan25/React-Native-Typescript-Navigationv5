import { CounterActionTypes } from '../types/actions';
import { Counter } from '../types/Expense';

const defaultCounter: Counter = {
    count: 0
};

const counterReducer = (state = defaultCounter, action: CounterActionTypes): Counter => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.count
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - action.count
            };
        default:
            return state;
    }
}

export default counterReducer;