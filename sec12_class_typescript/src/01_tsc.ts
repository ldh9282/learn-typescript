export {}

class Player {
    first: string;
    last: string;
    score = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const player: Player = new Player('Foo', 'Bar')
console.log(player);
