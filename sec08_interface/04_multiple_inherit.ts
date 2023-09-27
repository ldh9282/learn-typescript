export {}

interface Person {
    name: string;
}

interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Person, Employee {
    level: string;
    languages: string[];
}

const tonny: Engineer = {
    name: "Tonny",
    id: 123897,
    email: "tonny@email.com",
    level: "senior",
    languages: ["JS", "Python"]
}

console.log(tonny);
