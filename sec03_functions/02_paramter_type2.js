"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var doSomething = function (person, age, isFunny) {
    console.log("".concat(person, ", ").concat(age, ", ").concat(isFunny));
};
doSomething("ChickenFace", 35, true);
function greet(person) {
    if (person === void 0) { person = "default person"; }
    console.log("Hi, ".concat(person));
}
greet();
greet("Gray");
