export {}


// T = number
// default generic type
function makeEmptyList<T = number>(): T[] {
    return []
}

// default generic type is number
const numbers = makeEmptyList()
// generic type is string
const strings = makeEmptyList<string>()