"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    // public is default in tsc
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
player.first = "changed_first";
console.log(player);
