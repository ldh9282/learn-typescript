export {}

// enum is a set of named constants

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

console.log(OrderStatus.PENDING); // 0
console.log(OrderStatus.SHIPPED); // 1
console.log(OrderStatus.DELIVERED); // 2
console.log(OrderStatus.RETURNED); // 3

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED
}

console.log(isDelivered(OrderStatus.DELIVERED));

