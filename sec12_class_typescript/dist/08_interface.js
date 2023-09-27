"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bike {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    brand;
    color;
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
console.log(bike1);
console.log(jacket1);
jacket1.print();
