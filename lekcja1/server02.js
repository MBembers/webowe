var express = require("express");
var app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT)
})

app.get("/", (req, res) => {
    console.log("GET /")
    res.send("response from server")
})
