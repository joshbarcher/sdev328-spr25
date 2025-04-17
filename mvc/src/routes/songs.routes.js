import express from 'express';
import { requestSongs, requestSingleSong, addSongRecord } from './../controllers/songs.controller.js'

const router = express.Router();

router.get("/songs", requestSongs);
router.get("/songs/:songId", requestSingleSong);
router.get("/songs/add/query", addSongRecord);

export default router;