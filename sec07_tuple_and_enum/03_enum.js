"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum is a set of named constants
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.PENDING); // 0
console.log(OrderStatus.SHIPPED); // 1
console.log(OrderStatus.DELIVERED); // 2
console.log(OrderStatus.RETURNED); // 3
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
console.log(isDelivered(OrderStatus.DELIVERED));
