const express = require('express');
const blog = require('./routes/blog')

const app = express();
const port = 3000;

app.use('/blog', blog)
app.use(express.static("public"))
app.get("/", (req, res) => {
    console.log("hey its a get request");
    res.send("hallo");
});

app.post("/", (req, res) => {
    console.log("hey its a post req")
    res.send("hallo heres the post req");
});

app.put("/", (req, res) => {
    console.log("hey its a put req")
    res.send("hallo for the put req");
});
app.delete("/", (req, res) => {
    console.log('delete req');
    res.send("DELETE THAT SHIT");
});

app.get("/potato.html", (req, res) => {
    console.log("hey its a get request");
    res.sendFile("templates/potato.html", { root: __dirname });
});
app.get("/tomato.html", (req, res) => {
    console.log("GET TOMATO REQUEST");
    res.sendFile("templates/Templates2/tomato.html", { root: __dirname });
});
app.get("/api", (req, res) => {
    console.log('json response for an api');
    res.json({ a: 1, b: 2, c: 3, d: 4, harry: ["ram", "rahim"] });
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);

})

//handling post and other requests
