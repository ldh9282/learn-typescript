"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printAge(age) {
    console.log("You are ".concat(age, " years old"));
}
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
printAge(23);
printAge("23");
console.log(calculateTax(23.2, 0.03));
console.log(calculateTax("$23.2", 0.03));
