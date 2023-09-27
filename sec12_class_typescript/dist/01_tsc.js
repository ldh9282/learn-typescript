"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    first;
    last;
    score = 0;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
const player = new Player('Foo', 'Bar');
console.log(player);
