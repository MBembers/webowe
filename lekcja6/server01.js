const Datastore = require('nedb')

const kolekcja1 = new Datastore({
    filename: 'database/kolekcja1.db',
    autoload: true
});

kolekcja1.find({ a: "a1" }, function (err, docs) {
    console.log(docs)
});