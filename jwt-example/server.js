import express from 'express';
import router from './routes/api.routes.js';
import './config/jwt.config.js';

const app = express();

app.use(express.json());
app.use("/", router);

const PORT = 3000;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));