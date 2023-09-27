"use strict";
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// function identity(item: any): any {
//     return item
// }
function identity(item) {
    return item;
}
// function identity<T>(item: T): T {
//     return item
// }
identity("abcd");
// Argument of type 'number' is not assignable 
// to parameter of type 'string'.
// identity<string>(1234)
identity(1234);
const user01 = {
    username: "Dave"
};
identity(user01);
