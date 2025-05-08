import { Router } from 'express';
import { movies } from './../controllers/movies.controller.js';

const router = Router();

//routes
router.get("/", movies);

export default router;