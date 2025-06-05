import express from 'express';

const app = express();

app.use(express.static("public"));

const PORT = 3001;

app.listen(PORT, console.log(`Server started on http://localhost:${PORT}`));