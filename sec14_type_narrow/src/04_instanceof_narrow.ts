export {}

function printFullDate(date: string | Date) {
    // when type checking with object
    // cannot use typeof operator
    // typeof date === "Date"

    // instead, we can use instanceof operator
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }

}

class User {
    constructor(public name: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if (entity instanceof User) {

    } else {
        
    }
}