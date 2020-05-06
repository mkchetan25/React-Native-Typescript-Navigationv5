import { Alert } from "react-native";
import Utils from "./Utils";

export const validatorDialog = (text: string, error: string) => {
    if (text === undefined || text === "") {
        Alert.alert(
            "Validator Error",
            error,
            [
                {text: "OK"},
            ],
        );
        return true
    } else {
        return false
    }
};

export const emailValidatorDialog = (text: string) => {
    if (text === undefined || !Utils.validateEmail(text)) {
        Alert.alert(
            "Validator Error",
            "Incorrect email format",
            [
                {text: "OK"},
            ],
        );
        return true
    } else {
        return false
    }
};

export const showAlert = (title: string, error: string) => {
    Alert.alert(
        title,
        error,
        [
            {text: "OK"},
        ],
    );
};