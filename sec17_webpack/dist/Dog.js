export default class Dog {
    name;
    breed;
    age;
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    bark() {
        console.log("WOOF WOOF!!!");
    }
}
