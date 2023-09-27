export {}

// function merge<T, U>(o1: T, o2: U): T & U {
//     return {
//         ...o1,
//         ...o2
//     }
// }
function merge<T extends object, U extends object>(o1: T, o2: U): T & U {
    return {
        ...o1,
        ...o2
    }
}



// Argument of type 'number' is not assignable
//  to parameter of type 'object'.
// console.log(merge(3, {age: 17}));

console.log(merge({ name: "Dave" }, { age: 17 }));

interface Lengthy {
    lenght: number;
}

// Property 'lenght' does not exist on type 'T'.
// function doubleLength<T>(thing: T): number {
//     return thing.lenght * 2
// }

function doubleLength<T extends Lengthy>(thing: T): number {
    return thing.lenght * 2
}
