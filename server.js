const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT;
const sender = require('./routes/sender');

// app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "home.html"));
});

app.get("/success", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "success.html"));
});
app.use('/sender', sender);

app.use(express.static(__dirname + '/views'));
app.listen(port, () => console.log(`MAGICAL app listening here: ${port}!`));
