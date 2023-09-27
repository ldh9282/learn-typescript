export {}

function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    }
    return price * tax
}

printAge(23)
printAge("23")

console.log(calculateTax(23.2, 0.03));
console.log(calculateTax("$23.2", 0.03));
