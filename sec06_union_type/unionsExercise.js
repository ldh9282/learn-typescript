"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = 100;
highScore = true;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [];
stuff = [1, 2, 3, 4];
stuff = ["1", "2", "3", "4"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [
    { r: 0, g: 0, b: 0 },
    { h: 0, s: 0, l: 0 },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(people) {
    if (Array.isArray(people)) {
        for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
            var person = people_1[_i];
            console.log("Hello, ".concat(person));
        }
    }
    else {
        console.log("Hello, ".concat(people));
    }
}
greet("Foo");
greet(["Gray", "Dave", "Hope"]);
