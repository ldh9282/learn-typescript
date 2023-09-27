export {}

// array type
const nums: number[] = [1, 2, 3, 4]
const many: any[] = [1, 2, 3, 4, true, "adsf", {}]

// union of both type array 
const stuff: (number | string)[] = [1, 2, 3, 4]
const stuff2: (number | string)[] = ["1", 2, "3", 4]

// union of either type array
const stuff3: number[] | string[] = [1, 2, 3, 4]
const stuff4: number[] | string[] = ["1", "2", "3", "4"]
