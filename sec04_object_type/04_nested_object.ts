export {}


type Song = {
    title: string;
    artist: string; 
    numStreams: number; 
    credits: {
        producer: string; 
        writer: string
    }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
    console.log(`${song.credits.producer} - ${song.credits.writer}`);
}

const song: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers", 
    numStreams: 12873321, 
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
}

console.log(calculatePayout(song));
printSong(song);
