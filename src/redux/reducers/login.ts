import { LoginActionTypes } from '../types/actions';
import { User_Data } from '../types/Expense';

const defaultUser: User_Data = {
    user: {
        email: '',
        user_name: ''
    },
    userMeta: undefined,
    token: undefined
};

const loginReducer = (state = defaultUser, action: LoginActionTypes): User_Data => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                ...action.user
            };
        case 'LOGOUT':
            return {
                ...state,
                ...defaultUser
            };
        case 'ADD_USER':
            return {
                ...state,
                ...action.user
            }
        default:
            return state;
    }
}

export default loginReducer;