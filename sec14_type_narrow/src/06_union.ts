export {}

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rootser"
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow"
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig"
}

type FarmAnimal = Rooster | Cow  | Pig ;

function getFarmAnimalSound(animal: FarmAnimal): string {

    switch (animal.kind) {
        case("rootser"):
            // animal: Rooster
            console.log(animal);
            return "Oink!"
        case("pig"):
            // animal: Pig
            console.log(animal);
            return "Oink!"
        case("cow"):
            // animal: Cow
            console.log(animal);
            return "Moo!"
        default: // Exhaustiveness Checks With Never
            // animal: never
            console.log(animal);
            return ""   
    }
}

const stevie: Rooster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rootser"
}

console.log(getFarmAnimalSound(stevie));

