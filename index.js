const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 5432;
const recipient = require('./routes/recipient');

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "home.html"));
});
app.use('/recipient', recipient);

// app.use(express.static(__dirname + '/views'));
app.listen(port, () => console.log(`MAGICAL app listening here: ${port}!`));
