export {}

let movieTitle: string = "Amadeus"
movieTitle = "Arrival"
// Type 'number' is not assignable to type 'string'.
// movieTitle = 9
movieTitle.toUpperCase()

let num1: number = 9
num1 += 1
// Type 'string' is not assignable to type 'number'.
// num1 = "zero"

let isGameOver: boolean = false
isGameOver = true
// Type 'string' is not assignable to type 'boolean'.
// isGameOver = "true"