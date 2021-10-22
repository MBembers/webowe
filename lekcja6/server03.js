var express = require("express");
const path = require('path');
var app = express();
var formidable = require('formidable');
var hbs = require('express-handlebars');
const { application } = require("express");
const { mainModule } = require("process");
const PORT = 3000;
app.use(express.urlencoded({
  extended: true
}));
app.set('views', path.join(__dirname, 'views'));         // ustalamy katalog views
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));   // domyślny layout, potem można go zmienić
app.set('view engine', 'hbs');

app.listen(PORT, () => {
  console.log("start serwera na porcie " + PORT)
})
app.use(express.static('static'))


const context = {
  subject: "ćwiczenie 4 - dane z tablicy, select",
  fields: [
    { name: "title" },
    { name: "author" },
    { name: "lang" }
  ],
  books: [
    { title: "Lalka", author: "B Prus", lang: "PL" },
    { title: "Hamlet", author: "W Szekspir", lang: "ENG" },
    { title: "Pan Wołodyjowski", author: "H Sienkiewicz", lang: "PL" },
    { title: "Zamek", author: "F Kafka", lang: "CZ" }
  ]
}


app.get("/", function (req, res) {
  res.render('select.hbs', { context: context, layout: "main.hbs" });
});

app.get("/selected", function (req, res) {
  const type = req.query.field;
  context.type = typeof (type) == "object" ? type : [type];
  console.log(context.type);
  res.render('selected.hbs', {
    context: context.books.map(b => {
      let obj = {}
      context.type.forEach(t => {
        obj[t] = b[t]
      });
      console.log(obj)
      return obj
    }), layout: "main.hbs"
  });
});