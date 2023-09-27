"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    score = 0;
    #first;
    #last;
    constructor(first, last) {
        this.#first = first;
        this.#last = last;
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
const player = new Player('first', 'last');
console.log(JSON.stringify(player));
console.log(player.first);
console.log(player.last);
console.log(player.fullName);
player.first = "first22";
console.log(player.first);
try {
    player.first = "";
}
catch (error) {
    console.log(error.message);
}
