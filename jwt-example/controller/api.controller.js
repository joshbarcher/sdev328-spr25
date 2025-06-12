import users from './../repo/users.repo.js';
import hotels from './../repo/hotels.repo.js';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

//read in JWT_SECRET
config();

export const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(el => el.username === username && el.password === password);

    if (!user) {
        return res.status(401).json({
            message: "Bad credentials"
        })
    }

    //assemble a payload, generate the token, and send it back
    const payload = {
        id: user.id,
        role: "user"
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "30m" });
    res.status(200).json({
        token
    });
}