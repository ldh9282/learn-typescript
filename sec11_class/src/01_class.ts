export {}

class Player {
    first: any;
    last: any;
    score: number;
    score2 = 10; // syntax sugar
    #privateScore: number; // private field

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.#privateScore = 0;
        console.log("In Constructor");
    }
    taunt() {
        console.log("BooYah!");
        console.log(this.#privateScore);
        this.#secret()
        
    }
    // getter like java
    getPrivateScore() {
        return this.#privateScore
    }
    // setter like java
    setPrivateScore(privateScore: number) {
        this.#privateScore = privateScore
    }

    // private funtion
    #secret() {
       console.log("secret");
    }
        
}

const player1 = new Player("first1", "last1");
console.log(player1);
player1.taunt()

// Property '#privateScore' is not accessible 
// outside class 'Player' because it has a private identifier
// console.log(player1.#privateScore);

// Property '#secret' is not accessible 
// outside class 'Player' because it has a private identifier.
// player1.#secret()

console.log(player1.getPrivateScore());
player1.setPrivateScore(50)
console.log(player1.getPrivateScore());



