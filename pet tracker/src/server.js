import express from 'express';
import apiRouter from './routes/api.routes.js';

const app = express();

//middleware
app.use(express.json());

//routes...
app.use("/api/v1/pets", apiRouter);

const PORT = 3000;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));