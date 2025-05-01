import { getAllSongs } from './../repos/songs.repo.js';

export const displaySongs = (req, res) => {
    const songs = getAllSongs();
    res.status(200).render("songs", { 
        songs,
        fav: songs[1]
    })
}