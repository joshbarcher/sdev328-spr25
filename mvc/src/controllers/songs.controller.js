import { getAllSongs, getSongById, addSong } from './../repos/songs.repo.js';

export const requestSongs = (req, res) => {
    const songs = getAllSongs();
    res.status(200).json(songs);
};

export const requestSingleSong = (req, res) => {
    const song = getSongById(req.params.songId);
    if (song) {
        res.status(200).json(song);
    } else {
        res.status(404).send();
    }
}

export const addSongRecord = (req, res) => {
    const { title, artist, release, length, album } = req.query;

    const song = { title, artist, release, length, album };
    addSong(song);
    res.status(201).send("Song added");
}

export const showForm = (req, res) => {
    res.render("form");
}

export const formHandler = (req, res) => {
    //gather up the form data and send it to our repository
    const { title, artist, release, length, album } = req.body;
    const song = { title, artist, release, length, album };

    addSong(song);

    //show a receipt page? redirect?
    res.redirect("song-cards");
}