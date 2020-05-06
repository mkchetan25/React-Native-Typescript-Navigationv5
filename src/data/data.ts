import { Category, Expense, Product, ProductType, User_Data } from "../redux/types/Expense";

export const expense: Expense[] = [
    {
        id: "1",
        amount: 120
    }, {
        id: "2",
        amount: 110
    }
]

export const user: User_Data[] = [
    {
        user: {
            email: "test@test.com",
            user_name: "test",
            password: "test"
        },
        userMeta: {
            first_name: "test",
            last_name: "111",
            phone_number: "123456789",
            town: "Nanjangud"
        }
    }, {
        user: {
            email: "demo@test.com",
            user_name: "demo",
            password: "demo"
        },
        userMeta: {
            first_name: "demo",
            last_name: "123",
            phone_number: "987654321",
            town: "Nanjangud"
        }
    }
]

export const categories: Category[] = [
    {
        id: 1,
        name: "Grocceries",
        count: 10,
        image: {
            src: "images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    }, {
        id: 2,
        name: "Vegetables",
        count: 10,
        image: {
            src: "images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    }
]

export const productTypes: ProductType[] = [
    {
        id: 1,
        name: "Grocceries",
        count: 10,
        image: {
            src: ""
        },
        category: 1
    }, {
        id: 2,
        name: "Vegetables",
        count: 10,
        image: {
            src: ""
        },
        category: 2
    }
]

export const products: Product[] = [
    {
        id: 1,
        name: "Grocceries",
        count: 10,
        image: {
            src: ""
        },
        category: 1,
        productType: 1
    }, {
        id: 2,
        name: "Vegetables",
        count: 10,
        image: {
            src: ""
        },
        category: 2,
        productType: 2
    }
]