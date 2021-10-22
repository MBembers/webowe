const opers = require("./modules/operations");
var express = require("express");
const path = require("path");
var app = express();
const mongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectID;
const PORT = 3000;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.listen(PORT, () => {
  console.log("start serwera na porcie " + PORT);
});
app.use(express.static("static"));

let _db;
let users;
mongoClient.connect("mongodb://localhost/mydb", function (err, db) {
  if (err) console.log(err);
  else console.log("mongo podłączone!"); //tu można operować na utworzonej bazie danych db lub podstawić jej obiekt // pod zmienną widoczną na zewnątrz
  _db = db;
  db.createCollection("users", function (err, coll) {
    console.log("kolekcja powstała, sprawdź efekt w konsoli klienta mongo");
  });
  const users = db.collection("users");
  opers.selectAll(users);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/static/index.html"));
});
app.post("/addUser", (req, res) => {
  let response = { add: 1 };
  console.log(req.body);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(response));
});

app.post("/refresh", (req, res) => {
  let response = { refresh: 1 };
  console.log(req.body);
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(response));
});
