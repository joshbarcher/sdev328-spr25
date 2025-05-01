import { Router } from 'express';
import { displaySongs } from './../controllers/pages.controller.js';

const router = Router();

router.get("/pages/index", (req, res) => { res.render("page", {});})
router.get("/pages/converted", (req, res) => res.render("converted"));

//show the songs page!
router.get("/songs", displaySongs);
router.get("/song/single", (req, res) => res.render("single-song"));

export default router;