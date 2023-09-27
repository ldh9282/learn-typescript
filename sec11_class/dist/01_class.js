"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    first;
    last;
    score;
    score2 = 10; // syntax sugar
    #privateScore; // private field
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.#privateScore = 0;
        console.log("In Constructor");
    }
    taunt() {
        console.log("BooYah!");
        console.log(this.#privateScore);
        this.#secret();
    }
    // getter like java
    getPrivateScore() {
        return this.#privateScore;
    }
    // setter like java
    setPrivateScore(privateScore) {
        this.#privateScore = privateScore;
    }
    // private funtion
    #secret() {
        console.log("secret");
    }
}
const player1 = new Player("first1", "last1");
console.log(player1);
player1.taunt();
// Property '#privateScore' is not accessible 
// outside class 'Player' because it has a private identifier
// console.log(player1.#privateScore);
// Property '#secret' is not accessible 
// outside class 'Player' because it has a private identifier.
// player1.#secret()
console.log(player1.getPrivateScore());
player1.setPrivateScore(50);
console.log(player1.getPrivateScore());
