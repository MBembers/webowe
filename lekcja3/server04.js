var express = require("express");
const path = require('path');
var app = express();
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
  res.sendFile(path.join(__dirname, '/static/index04.html'));
});

app.post("/post", function (req, res) {
  res.setHeader("Content-Type", "application/json")
  console.log(req.body)
  obj = req.body
  obj.range2 = obj.range1
  res.send(JSON.stringify(obj, null, 5));
})