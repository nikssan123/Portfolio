const express = require("express");
const path = require("path");

const app = express();

app.use("/public", express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server listening on port 3000");
});