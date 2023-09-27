export {}

// abstract class can have abstract method, concrete method,
// and constuctor

// Employee - FullTimeEmployee
//          - PartTimeEmployee

abstract class Employee {
    constructor(public first: string, public last: string) {}

    // abstract method
    abstract getPay(): number;

    // concrete method
    greet() {
        console.log("HELLO!");
    }
}

class FullTimeEmployee extends Employee {
    constructor(
        public first: string, 
        public last: string, 
        private salary: number) {
            super(first, last)
    }
    getPay(): number {
        return this.salary;
    }
}

class PartTimeEmployee extends Employee {
    constructor(
        public first: string, 
        public last: string, 
        private hourlyRate: number,
        private hourlyWorked: number) {
            super(first, last)
    }
    getPay(): number {
        return this.hourlyRate * this.hourlyWorked;
    }
}

const betty = new FullTimeEmployee("Betty", "White", 95000)
console.log(betty);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100)
console.log(bill);
console.log(bill.getPay());


