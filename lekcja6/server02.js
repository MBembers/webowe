var express = require("express");
const path = require('path');
var app = express();
var formidable = require('formidable');
var hbs = require('express-handlebars');
const { application } = require("express");
const { mainModule } = require("process");
const Datastore = require('nedb')


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

function renderCustom(res) {
    const col = new Datastore({
        filename: 'database/cars.db',
        autoload: true
    });

    const context = {
        addform: [
            { name: 'insurance', label: 'insurance' },
            { name: 'damaged', label: 'damaged' },
            { name: 'petrol', label: 'petrol' },
            { name: 'fourwd', label: '4x4' },
        ],
        displaytable: {
            header: ['', 'ubezpieczony', 'benzyna', 'uszkodzony', 'naped 4x4', '', ''],
            content: {}
        }
    }
    col.find({}, function (err, d) {
        context.displaytable.content = d
        console.log(context)
        res.render('vehicles.hbs', { context: context, layout: "main.hbs" });
    });
}


app.get("/", function (req, res) {
    renderCustom(res);
});

app.get("/addcar", function (req, res) {
    const doc = {
        insurance: req.query.insurance === 'on' ? 'YES' : 'NO',
        petrol: req.query.petrol === 'on' ? 'YES' : 'NO',
        damaged: req.query.damaged === 'on' ? 'YES' : 'NO',
        fourwd: req.query.fourwd === 'on' ? 'YES' : 'NO',
    }
    col.insert(doc, () => {
        renderCustom(res);
    })
});