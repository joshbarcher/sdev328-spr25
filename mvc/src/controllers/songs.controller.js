import { getAllSongs } from './../repos/songs.repo.js';

export const requestSongs = (req, res) => {
    const songs = getAllSongs();
    res.status(200).json(songs);
}