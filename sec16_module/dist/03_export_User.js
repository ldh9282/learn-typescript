export default class User {
    username;
    email;
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logout!!`);
    }
}
