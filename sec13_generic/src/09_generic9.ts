export {}

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

// class VideoPlayList {
//     public videos: Video[] = []
// }
// class SongPlayList {
//     public songs: Song[] = []
// }

class PlayList<T> {
    public queue: T[] = [];
    add(item: T) {
        this.queue.push(item)
    }
}

const songs = new PlayList<Song>()

const videos = new PlayList<Video>()