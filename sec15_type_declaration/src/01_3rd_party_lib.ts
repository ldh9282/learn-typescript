export {}

import axios from "axios"

// For Axios Test: Free Fake REST API
// search on google: jsonplaceholder

// https://jsonplaceholder.typicode.com/users/1

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string
    };
}


axios
    .get<User>("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
        // res: AxiosResponse<User, any>
        // res.data: User

        // way 1
        // const data = res.data

        // way 2
        const { data } = res
        
        console.log(data);
        
        
    })
    .catch((e) => {
        console.log("Error!", e);
    });