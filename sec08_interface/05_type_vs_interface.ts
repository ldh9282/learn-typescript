export {}

// type alias vs interface
// type alias can be shaped as literal or object and so on
// because type alias is just an alias

// literal
type Color = "red" | "blue"
// object
type Song = {
    title: string;
    artist: string; 
    numStreams: number; 
    credits: {
        producer: string; 
        writer: string
    }
}
// and so on ...
type stuff = number[] | string[]

// interface should be shaped as only object

// but interface can be reopend. 
// reopening means declaration merging

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 13,
    breed: "Australian Shepherd",
    bark(): string {
        return "WOOF WOOF!"
    }
}
// type alias cannot be reopened.

// type can have intersection type
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

// interface can have inheritance

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Australian Shepherd",
    bark(): string {
        return "WOOF WOOF!"
    },
    job: "drug sniffer"
}