import express from 'express';
import router from './routes/home.routes.js';

const app = express();

//configure the app for requests...

//route to our files/endpoints
app.get("/home", (req, res) => res.send("Hello, world!"));
app.use("/my", router);

//start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));