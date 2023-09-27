"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
axios_1.default
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    // res: AxiosResponse<User, any>
    // res.data: User
    // way 1
    // const data = res.data
    // way 2
    const { data } = res;
    console.log(data);
})
    .catch((e) => {
    console.log("Error!", e);
});
