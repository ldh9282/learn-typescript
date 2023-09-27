export {}
// literal means a constant value

// literal type
let zero: 0 = 0
// Type '1' is not assignable to type '0'
// zero = 1

// literal type
let hi: "Hi" = "Hi"
// Type '"Hello"' is not assignable to type '"Hi"'.
// hi = "Hello"


// literal type
type Mood = "Happay" | "Sad"
let mood: Mood = "Happay"
mood = "Sad"