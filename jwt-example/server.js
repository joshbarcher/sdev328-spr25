import express from 'express';
import router from './routes/api.routes.js';
import './config/jwt.config.js';
import passport from 'passport';

const app = express();

app.use(passport.initialize());
app.use(express.json());
app.use("/", router);

const PORT = 3025;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));