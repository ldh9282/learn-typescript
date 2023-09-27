"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function triple(value) {
    // typeof guard(if typeof -> return pattern)
    if (typeof value === "number") {
        return value * 3;
    }
    return value.repeat(3);
}
