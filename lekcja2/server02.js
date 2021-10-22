var express = require("express");
const path = require('path');
var app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT)
})

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('static'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static/index02.html'));
});

app.post('/handleform', (req, res) => {
    console.log(req.body)
    res.send('<div style="width: 100%; height: 100%; color: white; padding-top: 100px; font-size: 30pt; text-align: center; background-color: ' + req.body.color + '"> ' + JSON.stringify(req.body) + ' </div>')
})
