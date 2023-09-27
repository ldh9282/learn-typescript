"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// animal is Cat means 
// when isCat is returning true, 
// typescript can predicate animal is Cat
function isCat(animal) {
    // way 1: in operator
    // return "numLives" in animal
    // way 2: explicit type conversion
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        // animal: Cat
        console.log(animal);
        return "Meow";
    }
    // animal: Dog
    console.log(animal);
    return "Bow";
}
