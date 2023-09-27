"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point = {
    x: 123,
    y: 123
};
var thomas = {
    id: 21837,
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    sayHi: function (name) {
        return "Hi, ".concat(name);
    }
};
var thomas2 = {
    id: 218372,
    first: "Thomas2",
    last: "Hardy2",
    nickname: "Tom2",
    sayHi: function (name) {
        return "Hi, ".concat(name);
    }
};
console.log(point);
console.log(thomas);
console.log(thomas.sayHi('Dave'));
console.log(thomas2);
console.log(thomas2.sayHi('Dave'));
