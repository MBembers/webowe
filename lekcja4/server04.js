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

var number = 0;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static/index04.html'));
});
app.get('/random', function (req, res) {
  number = Math.floor(Math.random() * 3) + 1
  res.send("amogus")
});
app.post('/compare', function (req, res) {
  console.log(req.body);
  let path = ""
  if (req.body === number)
    path = "upload_0c1562043c3ad42fcee9d368f1042f3e.jpg"
  else
    path = "upload_5626faa225d5c5a58d2dea3ee0b8e3fe.jpg"
  res.sendFile("C:/Users/3P1a/Desktop/webowe/lekcja4/static/assets/upload/" + path)
});
