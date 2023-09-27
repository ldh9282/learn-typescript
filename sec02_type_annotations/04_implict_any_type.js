"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var movies = ["Arriavl", "The Thing", "Aliens", "Amadeus"];
// Variable 'foundMovie' implicitly has an 'any' type,
// but a better type may be inferred from usage.
// delayed initialization -> any type (implict)
// implict any type is not good practice
var foundMovie;
for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
    var movie = movies_1[_i];
    if (movie === "Amadeus") {
        foundMovie = movie;
    }
}
foundMovie();
