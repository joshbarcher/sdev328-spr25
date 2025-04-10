import { Router } from 'express';

const router = Router();

router.get("/books/search", (req, res) =>  {
    const { author, recent, format } = req.query;

    let feedback = "";
    if (recent === "true") {
        feedback = "Buy a new book";
    } else {
        feedback = "Pick up a book 2nd hand";
    }

    res.status(200).json({
        found: true,
        author,
        feedback,
        format
    })
})

export default router;