import express from 'express';
import router from './routes/songs.routes.js';
import pageRouter from './routes/pages.routes.js';

const app = express();

//set configuration for app
app.set("view engine", "pug");
app.set("views", "src/views")

//configure the server
app.use(express.static("public"));

app.use("/", router);
app.use("/", pageRouter);

const PORT = 8002;
app.listen(PORT, () => console.log(`Starting server - http://localhost:${PORT}`));