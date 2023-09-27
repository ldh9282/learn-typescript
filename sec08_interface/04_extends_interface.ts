export {}

interface Dog {
    name: string;
    age: number;
}

// ServiceDogs inherits or extends interface Dog
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    job: "drug sniffer"
}