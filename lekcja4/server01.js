var express = require("express");
const path = require('path');
var app = express();
var formidable = require('formidable');
const { application } = require("express");
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

app.post('/handleUpload', function (req, res) {
    let form = formidable({});
    form.multiples = true
    form.uploadDir = __dirname + '/static/assets/upload/'       // folder do zapisu zdjęcia
    form.keepExtensions = true   // zapis z rozszerzeniem pliku

    form.parse(req, function (err, fields, files) {

        console.log("----- przesłane pola z formularza ------");

        console.log(fields);

        console.log("----- przesłane formularzem pliki ------");

        console.log(files);
        res.setHeader("content-type", "application/json")
        res.send(JSON.stringify([fields, files], null, 4))
    });
});