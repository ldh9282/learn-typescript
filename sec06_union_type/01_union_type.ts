export {}

// union type
let age: number | string = 21
age = 25
age = "25"

type Point = {
    x: number;
    y: number;
}

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {
    x: 1,
    y: 34
}

console.log(coordinates);

coordinates = {
    lat: 321.213,
    long: 23.334
}

console.log(coordinates);