function numberIdentity(item: number): number {
    return item
}

function stringIdentity(item: string): string {
    return item
}

function booleanIdentity(item: boolean): boolean {
    return item
}

// function identity(item: any): any {
//     return item
// }

function identity<Type>(item: Type): Type {
    return item
}
// function identity<T>(item: T): T {
//     return item
// }

identity<string>("abcd")
// Argument of type 'number' is not assignable 
// to parameter of type 'string'.
// identity<string>(1234)

identity<number>(1234)

interface User {
    username: string;
}
const user01: User = {
    username: "Dave"
}
identity<User>(user01)