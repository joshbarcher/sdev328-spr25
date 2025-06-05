import express from 'express';
import { requestSongs, requestSingleSong, addSongRecord, showForm, formHandler } from './../controllers/songs.controller.js'

const router = express.Router();

router.get("/api/songs", requestSongs);
router.get("/api/songs/:songId", requestSingleSong);
router.get("/api/songs/add/query", addSongRecord);

router.get("/pages/songs/cards", (req, res) => {
    const songs = [ 
        { title: "Peekaboo" },
        { title: "Intergalactic bound" },
        { title: "Roland faunte" },
        { title: "Rocking the boat" }
    ]
    const favSong = { title: "voodoo child" }

    res.status(200).render("song-cards", {
        songs,
        favSong
    });
})

//how many routes to support a form?
router.get("/pages/songs/form", showForm);
router.post("/pages/songs/form", formHandler);

export default router;