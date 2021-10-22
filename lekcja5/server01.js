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

app.get("/", function (req, res) {
    res.render('index.hbs', { layout: "main.hbs" });
});
app.get("/login", function (req, res) {
    res.render('login.hbs', { layout: "main.hbs" });
});
app.get("/index", function (req, res) {
    res.render('index.hbs', { layout: "main.hbs" });
});