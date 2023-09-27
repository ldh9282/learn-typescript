"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 10] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 34] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 324] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 98] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "up";
    ArrowKeys["DOWN"] = "down";
    ArrowKeys["LEFT"] = "left";
    ArrowKeys["RIGHT"] = "right";
})(ArrowKeys || (ArrowKeys = {}));
console.log(OrderStatus);
console.log(ArrowKeys);
