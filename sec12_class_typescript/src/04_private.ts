export {}

class Player {
    private first: string; // private, visible in object
    #last: string; // also prvaitge, but not visible in object
    public score = 0; // public
    constructor(first: string, last: string) {
        this.first = first;
        this.#last = last;
    }
}

const player: Player = new Player('Foo', 'Bar')
console.log(player);
// Property 'first' is private and only accessible 
// within class 'Player'.
// player.first = "changed_first"
// Property '#last' is not accessible 
// outside class 'Player' because it has a private identifier.
// player.#last = "changed_last"
console.log(player);