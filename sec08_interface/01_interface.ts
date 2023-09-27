export {}

interface Point {
    x: number;
    y: number;
}

const point: Point = {
    x: 123,
    y: 123
}

type Person = {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi: (name: string) => string;
}

interface Person2 {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi: (name: string) => string;
}

const thomas: Person = {
    id: 21837,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: (name: String): string => {
        return `Hi, ${name}`
    }
}
const thomas2: Person2 = {
    id: 218372,
    first: "Thomas2",
    last: "Hardy2",
    nickname: "Tom2",
    sayHi: (name: String): string => {
        return `Hi, ${name}`
    }
}

console.log(point);
console.log(thomas);
console.log(thomas.sayHi('Dave'))
console.log(thomas2);
console.log(thomas2.sayHi('Dave'))


