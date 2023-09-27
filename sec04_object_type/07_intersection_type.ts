export {}

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

// intersection type
type ColorfulCircle = Circle & Colorful

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}

type Cat = {
    numLives: number
}

type Dog = {
    breed: string
}

// intersection type
type CatDog = Cat & Dog & {age: number;}

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9
}

console.log(happyFace);

console.log(christy);
