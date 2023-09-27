"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomElment(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
// arrow function with generic
// const getRandomElment = <T,>(list: T[]): T => {
//     const randIdx = Math.floor(Math.random() * list.length)
//     return list[randIdx]
// }
console.log(getRandomElment(["a", "b", "c"]));
console.log(getRandomElment([1, 2, 3, 4]));
// typescript can infer generic type
console.log(getRandomElment([1, 2, 3, 4]));
