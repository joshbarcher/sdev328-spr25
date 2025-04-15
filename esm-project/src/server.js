import express from 'express';
import router from './routes/home.routes.js';
import otherRoute from './routes/other.routes.js';
import queryRouter from './routes/query.route.js';

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//route to our files/endpoints
app.use("/", router);
app.use("/", otherRoute);
app.use("/", queryRouter);

//start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));