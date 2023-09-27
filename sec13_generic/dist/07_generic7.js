"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function merge<T, U>(o1: T, o2: U): T & U {
//     return {
//         ...o1,
//         ...o2
//     }
// }
function merge(o1, o2) {
    return {
        ...o1,
        ...o2
    };
}
// Argument of type 'number' is not assignable
//  to parameter of type 'object'.
// console.log(merge(3, {age: 17}));
console.log(merge({ name: "Dave" }, { age: 17 }));
// Property 'lenght' does not exist on type 'T'.
// function doubleLength<T>(thing: T): number {
//     return thing.lenght * 2
// }
function doubleLength(thing) {
    return thing.lenght * 2;
}
