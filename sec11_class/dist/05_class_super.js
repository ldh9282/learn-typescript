"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    // static property
    static description = "Player in Our Game";
    #first;
    #last;
    constructor(first, last) {
        this.#first = first;
        this.#last = last;
    }
    // static function
    static printDescription() {
        console.log(Player.description);
    }
    // getter
    // can access to what looks like a property,
    // but not a property
    get fullName() {
        return `${this.#first} ${this.#last}`;
    }
    get first() {
        return this.#first;
    }
    get last() {
        return this.#last;
    }
    // setter
    // can access to what looks like a property,
    // but not a property
    set first(first) {
        if (!first) {
            throw new Error("when set first: empty input");
        }
        this.#first = first;
    }
    set last(last) {
        this.#last = last;
    }
}
class AdminPlayer extends Player {
    isAdmin;
    methods;
    constructor(first, last) {
        super(first, last);
        this.isAdmin = true;
        this.methods = ["GET", "DELETE", "POST", "PUT", "PATCH"];
    }
}
const adminPlayer = new AdminPlayer('Foo', 'Bar');
console.log(adminPlayer.isAdmin);
console.log(adminPlayer.first);
console.log(adminPlayer.last);
console.log(adminPlayer.methods);
