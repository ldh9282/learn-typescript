"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// parameter type on function
function square(num) {
    return num * num;
}
function greet(person) {
    person = person.toUpperCase();
    return "Hi there, ".concat(person, "!");
}
square(3);
greet("Gray");
