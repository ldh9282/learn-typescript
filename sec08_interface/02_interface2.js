"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shoes = {
    name: "Blue Suede Shoes",
    price: 100,
    applayDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes);
console.log(shoes.applayDiscount(0.4));
