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
// Cannot assign to 'first' because it is a read-only property.
// player.first = "changed_first"
