import express from 'express';
import { requestSongs } from './../controllers/songs.controller.js'

const router = express.Router();

router.get("/songs", requestSongs);

export default router;