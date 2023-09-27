export {}

// not as type, interface can be reopened
// reopening mean declaration merging
interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

// type cannot be reopened
type Cat = {
    name: string;
    age: number;
}

// Duplicate identifier 'Cat'.
// type Cat = {
//     breed: string;
//     bark(): string;
// }

const elton: Dog = {
    name: "Elton",
    age: 13,
    breed: "Australian Shepherd",
    bark(): string {
        return "WOOF WOOF!"
    }
}