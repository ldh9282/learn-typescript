export {}

// ? means it is optional
type Point = {
    x: number;
    y: number;
    z?: number;
}

const myPonit:  Point = {x: 3, y: 6}
const myPonit2:  Point = {x: 3, y: 6, z: 9}

console.log(myPonit);
console.log(myPonit2);

