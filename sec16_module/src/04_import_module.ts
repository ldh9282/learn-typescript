import { Color, Person } from "./04_export_type.js";

const person: Person = {
    username: "dave",
    email: "test@test.com"
}

const color: Color = "red";

console.log("04_import_module", "person", person);
console.log("04_import_module", "color", color);
