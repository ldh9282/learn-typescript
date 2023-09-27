export {}

class Player {
    // public readonly first: string;
    // public readonly last: string;
    public score: number = 0;
    // shorthand version
    constructor(public first: string, public last: string) {
        
    }

    private secretMethod(): void {
        console.log("SECRET METHOD!!");
        
    }
}

const player: Player = new Player('Foo', 'Bar')
console.log(player);