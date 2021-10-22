var express = require("express");
const path = require('path');
var app = express();
var formidable = require('formidable');
const { application } = require("express");
const PORT = 3000;
var json = require("./static/assets/data.json");
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.listen(PORT, () => {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static/index03.html'));
});

app.get('/api/all', function (req, res) {
  console.log(req.body);
  res.send(JSON.stringify(json, null, 4))
});
app.get('/api/honda', function (req, res) {
  console.log(req.body);
  res.send(JSON.stringify(json.filter(c => c.car_name === 'Honda'), null, 4))
});
app.get('/api/first', function (req, res) {
  console.log(req.body);
  res.send(JSON.stringify(json[0], null, 4))
});