"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(o1, o2) {
    return {
        ...o1,
        ...o2
    };
}
console.log(merge({ name: "Dave" }, { age: 17 }));
// typescript can infer generic type
console.log(merge({ name: "Dave" }, { age: 17 }));
