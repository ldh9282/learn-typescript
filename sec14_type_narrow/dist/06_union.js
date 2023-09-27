"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("rootser"):
            // animal: Rooster
            console.log(animal);
            return "Oink!";
        case ("pig"):
            // animal: Pig
            console.log(animal);
            return "Oink!";
        case ("cow"):
            // animal: Cow
            console.log(animal);
            return "Moo!";
        default: // Exhaustiveness Checks With Never
            // animal: never
            console.log(animal);
            return "";
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rootser"
};
console.log(getFarmAnimalSound(stevie));
