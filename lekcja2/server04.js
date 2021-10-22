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

let users = [
  { nick: "111", email: "111@w.pl" },
  { nick: "222", email: "222@w.pl" },
  { nick: "333", email: "333@w.pl" }
]

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static/index04.html'));
});

app.post('/handleform', (req, res) => {
  const body = req.body
  console.log("/POST handleform", body)
  if (users.find(u => u.email === body.email)) {
    res.send('witaj ' + body.nick + '! email ' + body.email + ' już istanieje w bazie.')
  }
  else {
    users.push({ nick: body.nick, email: body.email })
    res.send('witaj ' + body.nick + '! email ' + body.email + ' zostal dodany.')
  }
  console.log(users)
})

app.get('/delete-select', (req, res) => {
  console.log("/POST delete-select", req.query)
  let options = ''
  for (u in users) {
    options += '<option value="' + users[u].email + '"> ' + users[u].email + ' </option> '
  }
  let form = '<form method="POST" action="/delete"> <select name="deleteduser"> ' + options + ' </select> <input type="submit" value="usun"> </form>'
  res.send(form)
  console.log(users)
})

app.get('/delete-radio', (req, res) => {
  console.log("/POST delete-select", req.query)
  let radios = ''
  for (u in users) {
    radios += '<input type="radio" name="deleteduser" value="' + users[u].email + '"> ' + users[u].email
  }
  let form = '<form method="POST" action="/delete"> <select name="deleteduser"> ' + options + ' </select> <input type="submit" value="usun"> </form>'
  res.send(form)
  console.log(users)
})

app.get('/delete-checkbox', (req, res) => {
  console.log("/POST delete-select", req.query)
  let options = ''
  for (u in users) {
    options += '<option value="' + users[u].email + '"> ' + users[u].email + ' </option> '
  }
  let form = '<form method="POST" action="/delete"> <select name="deleteduser"> ' + options + ' </select> <input type="submit" value="usun"> </form>'
  res.send(form)
  console.log(users)
})

app.post('/delete', (req, res) => {
  const body = req.body
  console.log("/POST delete", body)
  users = users.filter(u => u.email !== body.deleteduser)
  res.send("usunieto email")
})