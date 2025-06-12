import { Router } from 'express';
import { login } from './../controller/api.controller.js';

const router = Router();

//routes
router.post("/login", login);

export default router;