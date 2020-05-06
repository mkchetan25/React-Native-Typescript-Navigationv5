export interface Expense {
    id: string;
    amount: number;
}

export interface Counter {
    count: number;
}

export interface User {
    email: string;
    user_name: string;
    password?: string;
}

export interface User_Info {
    first_name: string;
    last_name: string;
    phone_number: string;
    town: string;
}

export interface User_Data {
    user?: User;
    userMeta?: User_Info;
    token?: string;
    error?: string;
}

export interface Category {
    id?: number;
    image?: {
        src: string;
    };
    name: string;
    count: number;
}

export interface ProductType {
    id?: number;
    image?: {
        src: string;
    };
    name: string;
    count: number;
    category: number;
}

export interface Product {
    id?: number;
    image?: {
        src: string;
    };
    name: string;
    count: number;
    category: number;
    productType: number;
}