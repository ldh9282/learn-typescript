export {}

function merge<T, U>(o1: T, o2: U): T & U {
    return {
        ...o1,
        ...o2
    }
}


console.log(merge<{name: string}, {age: number}>({name: "Dave"}, {age: 17}));

// typescript can infer generic type
console.log(merge({name: "Dave"}, {age: 17}));
