"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    first;
    last;
    // public readonly first: string;
    // public readonly last: string;
    // can access to itself class or child class
    _score = 0;
    // private _score: number = 0;
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
class SuperPlayer extends Player {
    isAdmin = true;
    maxScore() {
        // Property '_score' is private and only accessible 
        // within class 'Player'.
        this._score = 999999;
    }
}
// const player: Player = new Player('Foo', 'Bar')
const player = new SuperPlayer('Foo', 'Bar');
console.log(player);
console.log(player.fullName);
console.log(player.score);
player.maxScore();
console.log(player.score);
