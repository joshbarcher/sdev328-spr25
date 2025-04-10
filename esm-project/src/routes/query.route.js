import express from 'express';

export const router = express.Router();

router.get("/noise", (req, res) => {
    res.status(200).send("Oink!");
})

export default router;