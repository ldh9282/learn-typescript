export {}

interface Cat {
    name: string;
    numLives: number;
}

interface Dog {
    name: string;
    breed: string;
}

// animal is Cat means 
// when isCat is returning true, 
// typescript can predicate animal is Cat
function isCat(animal: Cat | Dog): animal is Cat {
    // way 1: in operator
    // return "numLives" in animal

    // way 2: explicit type conversion
    return (animal as Cat).numLives !== undefined

}
function makeNoise(animal: Cat | Dog): string {

    if (isCat(animal)) {
        // animal: Cat
        console.log(animal);
        
        return "Meow"
    }
    // animal: Dog
    console.log(animal);
    return "Bow"
}