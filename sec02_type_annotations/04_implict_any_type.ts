export {}

const movies = ["Arriavl", "The Thing", "Aliens", "Amadeus"]
// Variable 'foundMovie' implicitly has an 'any' type,
// but a better type may be inferred from usage.
// delayed initialization -> any type (implict)
// implict any type is not good practice
let foundMovie; 

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = movie;
    }
}

foundMovie()