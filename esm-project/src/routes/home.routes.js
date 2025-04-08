import express from 'express';

const router = express.Router();

router.get("/name", (req, res) => {
    res.status(200).json({
        fname: "Josh",
        lname: "Archer",
        middle: "B",
        title: "Mr.",
        nickname: "Pounce"
    })
})

router.get("/name/:you", (req, res) => {
    const yourName = req.params.you;

    res.status(200).json({
        msg: `Hello, ${yourName}`
    })
})

router.get("/multiply/:a/:b", (req, res) => {
    let { a, b } = req.params;

    //convert string to number
    a = Number(a);
    b = Number(b);

    const result = a * b;

    res.status(200).json({
        result
    })
})

router.get("/name/first/:first/middle/:middle/last/:last", (req, res) => {
    const { first, last, middle } = req.params;

    res.status(200).json({
        first,
        middle,
        last
    })
})

export default router;