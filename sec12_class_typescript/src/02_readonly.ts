export {}

class Player {
    readonly first: string;
    last: string;
    score = 0;
    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }
}

const player: Player = new Player('Foo', 'Bar')
console.log(player);
// Cannot assign to 'first' because it is a read-only property.
// player.first = "changed_first"