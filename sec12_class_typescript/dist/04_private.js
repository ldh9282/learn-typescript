"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    first; // private, visible in object
    #last; // also prvaitge, but not visible in object
    score = 0; // public
    constructor(first, last) {
        this.first = first;
        this.#last = last;
    }
}
const player = new Player('Foo', 'Bar');
console.log(player);
// Property 'first' is private and only accessible 
// within class 'Player'.
// player.first = "changed_first"
// Property '#last' is not accessible 
// outside class 'Player' because it has a private identifier.
// player.#last = "changed_last"
console.log(player);
