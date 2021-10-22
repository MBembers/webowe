module.exports = {
  //insert

  insertTo: function (collection, data) {
    collection.insert(data, function (err, result) {
      console.log(result);
    });
  }, //select all - zwraca tablicę pasujących dokumentów

  selectAll: function (collection) {
    collection.find({}).toArray(function (err, items) {
      console.log(items);
    });
  }, //select - zwraca tablicę pasujących dokumentów, z ograniczeniem do {login:"test"}

  selectWhere: function (collection, limit) {
    collection.find({ limit }).toArray(function (err, items) {
      console.log(items);
    });
  }, //delete - usunięcie poprzez id - uwaga na ObjectID

  deleteById: function (ObjectID, collection, id) {
    collection.remove({ _id: ObjectID(id) }, function (err, data) {
      console.log(data);
    });
  }, // update - aktualizacja poprzez id - uwaga na ObjectID - to funkcja, a nie string // uwaga: bez $set usuwa poprzedni obiekt i wstawia nowy \
  // z $set - dokonuje aktualizacji tylko wybranego pola

  updateById: function (id, ObjectID, collection, data) {
    collection.updateOne(
      { _id: ObjectID },
      { $set: data },
      function (err, data) {
        console.log("update: " + data);
      }
    );
  },
};
