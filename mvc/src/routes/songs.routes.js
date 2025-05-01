import express from 'express';
import { requestSongs, requestSingleSong, addSongRecord } from './../controllers/songs.controller.js'

const router = express.Router();

router.get("/api/songs", requestSongs);
router.get("/api/songs/:songId", requestSingleSong);
router.get("/api/songs/add/query", addSongRecord);

export default router;