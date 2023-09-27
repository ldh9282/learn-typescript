"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRuntime(media) {
    // Does the media "object" have numEpisodes "property"?
    if ("numEpisodes" in media) {
        // media: TVShow
        return media.numEpisodes * media.episodeDuration;
    }
    // media: Movie
    return media.duration;
}
console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 }));
