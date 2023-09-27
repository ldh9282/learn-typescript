export {}

// TypeScript can infer type
let tvShow = "Olive Kitteridge"
tvShow = "The Other Two"
// Type 'boolean' is not assignable to type 'string'.
// tvShow = false

let isFunny = false
isFunny = true
// Type 'string' is not assignable to type 'boolean'.
// isFunny = "asd"
