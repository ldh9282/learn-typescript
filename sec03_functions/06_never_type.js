"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// never return type means it never return anything
// but void return type returns undefined
// never return type does not return undefined
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Game Loop Running!");
    }
}
// this function returns undefined 
// so it can not have never return type
// A function returning 'never' cannot have a reachable end point.
// function printTwice(msg: string): never {
//     console.log(msg);
//     console.log(msg);
// }
