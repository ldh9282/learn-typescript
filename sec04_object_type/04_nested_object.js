"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
    console.log("".concat(song.credits.producer, " - ").concat(song.credits.writer));
}
var song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
console.log(calculatePayout(song));
printSong(song);
