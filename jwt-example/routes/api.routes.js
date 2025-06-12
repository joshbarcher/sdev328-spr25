import { Router } from 'express';
import { login, getHotels } from './../controller/api.controller.js';
import { checkJwt } from './../middleware/auth.middleware.js';

const router = Router();

//routes
router.post("/login", login);
router.get("/hotels", checkJwt, getHotels);

export default router;