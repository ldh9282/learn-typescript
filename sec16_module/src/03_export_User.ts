import { Person } from "./04_export_type.js";

export default class User implements Person {
    constructor(public username: string, public email: string) {}
    logout() {
        console.log(`${this.username} logout!!`);
    }
}