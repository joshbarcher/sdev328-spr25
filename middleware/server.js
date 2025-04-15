import express from 'express';

const app = express();

//add some middleware!
app.use((req, res, next) => {
    console.log("Request made to server");
    next();
})

app.use((req, res, next) => {
    //log some details about the request
    console.log(`URL: ${req.url}`);
    console.log(`Accessed on: ${new Date().toUTCString()}`);
    next();
})

app.use("/public", express.static("public"));

app.get("/message", (req, res, next) => {
    res.status(200).send("Hello, from my middleware!");
})

//unknown request
app.use((req, res) => {
    res.status(404).json({
        msg: "Resource (page or data) not found!"
    })
})

app.listen(3000, () => console.log("Listening on http://localhost:3000"));