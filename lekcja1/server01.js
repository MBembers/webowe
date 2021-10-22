var express = require("express");
var app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))