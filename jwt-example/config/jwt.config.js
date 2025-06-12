import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { config } from 'dotenv';
import users from './../repo/users.repo.js';

//reads in the JWT_SECRET from .env
config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
}

//middleware to validate
passport.use(new Strategy(options, (payload, done) => {
    console.log(payload);
    const userId = payload.id;
    const user = users.find(el => el.id === userId);
    console.log(user);

    if (user) {
        done(null, user);
    } else {
        done(null, false);
    }
}))