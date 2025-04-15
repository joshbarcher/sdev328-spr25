import express from 'express';

export const router = express.Router();

router.get("/noise", (req, res) => {
    res.status(200).send("Oink!");
})

router.get("/math/add", (req, res) => {
    let { a, b } = req.query;

    if (!a || !b) {
        return res.status(404).send("Missing parameters a and/or b.");
    }

    // const one = req.query.a;
    // const two = req.query.b;

    //convert to a number
    a = Number(a);
    b = Number(b);

    const result = a + b;

    res.status(200).send(`${a} + ${b} = ${result}`);
})

export default router;