export {}

const activeUsers: string[] = []

activeUsers.push("Tony")
// Argument of type 'number' is not assignable to parameter of type 'string'.
// activeUsers.push(12)

const ageList: number[] = [45, 56, 13]
ageList[0] = 99
// Type 'string' is not assignable to type 
// ageList[0] = "asd"