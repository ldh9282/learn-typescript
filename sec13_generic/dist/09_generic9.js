"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class VideoPlayList {
//     public videos: Video[] = []
// }
// class SongPlayList {
//     public songs: Song[] = []
// }
class PlayList {
    queue = [];
    add(item) {
        this.queue.push(item);
    }
}
const songs = new PlayList();
const videos = new PlayList();
