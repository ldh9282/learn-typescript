"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    first;
    last;
    // public readonly first: string;
    // public readonly last: string;
    _score = 0;
    // shorthand version
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    secretMethod() {
        console.log("SECRET METHOD!!");
    }
    // treat it like a property
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(score) {
        if (score < 0) {
            throw new Error("set score: score cannot be under the zero");
        }
        this._score = score;
    }
}
const player = new Player('Foo', 'Bar');
console.log(player);
console.log(player.fullName);
console.log(player.score);
player.score = 22;
// player.score = -22
console.log(player.score);
