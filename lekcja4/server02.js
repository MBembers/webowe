var express = require("express");
const path = require('path');
var app = express();
var formidable = require('formidable');
const { application } = require("express");
const PORT = 3000;
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/static/index02.html'));
});

app.post('/api', function (req, res) {
    console.log(req.body);
    res.send(JSON.stringify(req.body, null, 4))
});