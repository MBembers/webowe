var express = require("express");
const path = require('path');
var app = express();
const PORT = 3000;
app.use(express.urlencoded({
    extended: true
}));

app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static/index01.html'));
});

app.post("/handle_form", function (req, res) {
    res.setHeader("Content-Type", "application/json")
    console.log(req.body)
    obj = req.body
    obj.iloczyn = obj.num1 * obj.num2
    obj.suma = parseInt(obj.num1) + parseInt(obj.num2)
    res.send(JSON.stringify(obj, null, 5));
})