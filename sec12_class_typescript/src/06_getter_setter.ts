export {}

class Player {
    // public readonly first: string;
    // public readonly last: string;
    private _score: number = 0;
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

const player: Player = new Player('Foo', 'Bar')
console.log(player);
console.log(player.fullName);
console.log(player.score);
player.score = 22
// player.score = -22
console.log(player.score);

