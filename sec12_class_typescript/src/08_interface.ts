export {}

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor (public color: string) {}
}

class Jacket implements Colorful, Printable {
    constructor(public brand: string, public color: string) {}

    print(): void {
        console.log(`${this.color} ${this.brand} jacket`);
        
    }
}


const bike1 = new Bike("red")

const jacket1 = new Jacket("Prada", "black")

console.log(bike1);
console.log(jacket1);
console.log(jacket1.print());
