export {}

const doSomething = (person: string, age: number, isFunny: boolean) => {console.log(`${person}, ${age}, ${isFunny}`);
};

doSomething("ChickenFace", 35, true)

function greet(person: string = "default person") {
    console.log(`Hi, ${person}`);
    
}

greet()
greet("Gray")