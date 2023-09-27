"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printFullDate(date) {
    // when type checking with object
    // cannot use typeof operator
    // typeof date === "Date"
    // instead, we can use instanceof operator
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Company {
    name;
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
    }
    else {
    }
}
