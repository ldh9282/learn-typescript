"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class can have abstract method, concrete method,
// and constuctor
// Employee - FullTimeEmployee
//          - PartTimeEmployee
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    // concrete method
    greet() {
        console.log("HELLO!");
    }
}
class FullTimeEmployee extends Employee {
    first;
    last;
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    first;
    last;
    hourlyRate;
    hourlyWorked;
    constructor(first, last, hourlyRate, hourlyWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hourlyWorked = hourlyWorked;
    }
    getPay() {
        return this.hourlyRate * this.hourlyWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty);
console.log(betty.getPay());
const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill);
console.log(bill.getPay());
