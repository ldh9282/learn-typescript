export {}

interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRuntime(media: Movie | TVShow): number {

    // Does the media "object" have numEpisodes "property"?
    if ("numEpisodes" in media) {
        // media: TVShow
        return media.numEpisodes * media.episodeDuration
    }

    // media: Movie
    return media.duration
}

console.log(getRuntime({ title: "Amadeus", duration: 140 }));
console.log(getRuntime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 30 }));


