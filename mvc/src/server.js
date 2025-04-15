import express from 'express';
import router from './routes/songs.routes.js';

const app = express();

app.use("/", router);

const PORT = 8002;
app.listen(PORT, () => console.log(`Starting server - http://localhost:${PORT}`));