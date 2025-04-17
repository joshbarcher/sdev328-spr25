import { Router } from 'express';

const router = Router();

router.get("/pages/index", (req, res) => {
    res.render("page", {});
})
router.get("/pages/converted", (req, res) => res.render("converted"));

export default router;