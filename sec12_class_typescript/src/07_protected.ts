export {}

class Player {
    // public readonly first: string;
    // public readonly last: string;

    // can access to itself class or child class
    protected _score: number = 0;
    // private _score: number = 0;
    // shorthand version
    constructor(public first: string, public last: string) {
        
    }

    private secretMethod(): void {
        console.log("SECRET METHOD!!");
        
    }

    // treat it like a property
    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score
    }

    set score(score: number) {
        if (score < 0) {
            throw new Error("set score: score cannot be under the zero")
        }
        this._score = score
    }

}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    public maxScore() {
        // Property '_score' is private and only accessible 
        // within class 'Player'.
        this._score = 999999;
    }
}

// const player: Player = new Player('Foo', 'Bar')
const player: SuperPlayer = new SuperPlayer('Foo', 'Bar')
console.log(player);
console.log(player.fullName);
console.log(player.score);
player.maxScore()
console.log(player.score);

