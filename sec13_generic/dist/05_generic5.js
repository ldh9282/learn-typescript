"use strict";
// function getRandomElment<T>(list: T[]): T {
//     const randIdx = Math.floor(Math.random() * list.length)
//     return list[randIdx]
// }
// arrow function with generic
const getRandomElment = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
