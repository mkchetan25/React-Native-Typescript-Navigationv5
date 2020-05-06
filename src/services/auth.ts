import { AsyncStorage } from "react-native";
import { user } from "../data/data";
import { User, User_Data, User_Info } from "../redux/types/Expense";

export class AuthService {
    constructor() {

    }

    async isValidUser(email: string, password: string): Promise<User_Data | undefined> {
        let res: User_Data = {
            user: undefined,
            userMeta: undefined
        };
        try {
            let userToken = '';
            const users = await user.filter((u) => u.user?.email);
            if (users.length) {
                res = users[0];
                userToken = `${users[0].user?.user_name}${password}`;
                res.token = userToken;
                await AsyncStorage.setItem("userToken", userToken);
            }
        } catch(err) {
            res.error = err.message;
        }
        return res;
    }

    async registerUser(email: string, user_name: string, password: string, first_name: string,
        last_name: string, phone_number: string, town: string): Promise<User_Data> {
        let res = '';
        const newUser: User = {
            email,
            user_name,
            password
        };
        const userInfo: User_Info = {
            first_name,
            last_name,
            phone_number,
            town,
        };
        const newUserData: User_Data = {
            user: newUser,
            userMeta: userInfo
        };
        try {
            res = user.push(newUserData).toString();
            if (res !== '') {
                newUserData.error = "Error during registration";
            }
        } catch(err) {
            newUserData.error = err.message;
        }
        return newUserData;
    }
}