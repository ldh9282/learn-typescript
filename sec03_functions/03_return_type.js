"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function square(num) {
    return num * num;
}
var greet = function (person) {
    return "Hi, ".concat(person);
};
var printGreet = function (person) {
    console.log("Hi, ".concat(person));
};
function rando(num) {
    if (Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}
square(3);
greet('Gray');
printGreet('Gray');
rando(5);
