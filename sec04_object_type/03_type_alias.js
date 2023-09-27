"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function doublePoint2(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
console.log(doublePoint({ x: 3, y: 3 }));
console.log(doublePoint2({ x: 3, y: 3 }));
