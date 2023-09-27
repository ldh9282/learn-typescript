"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    first;
    last;
    // public readonly first: string;
    // public readonly last: string;
    score = 0;
    // shorthand version
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("SECRET METHOD!!");
    }
}
const player = new Player('Foo', 'Bar');
console.log(player);
