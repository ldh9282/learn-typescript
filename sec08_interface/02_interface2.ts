export {}

interface Product {
    name: string;
    price: number;
    applayDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applayDiscount(discount: number): number {
        const newPrice: number = this.price * (1 - discount) 
        this.price = newPrice
        return this.price
    }
}

console.log(shoes);
console.log(shoes.applayDiscount(0.4));
