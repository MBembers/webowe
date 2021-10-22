var express = require("express");
var app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT)
})

app.get("/", function (req, res) {
    console.log("GET / ", req.query)
    resString = "<div style='display: flex; flex-flow: row wrap; color: white; text-align: center'>"
    for(let i = 1; i <= req.query.count; i++){
        hrefString = '<a href="/product/'+i+'" style="margin: 5px"> product id = '+ i +'</a>';
        resString += hrefString; 
    }
    resString += "</div>"
    //console.log(resString)
    res.send(resString)
})

app.get("/product/:id",  (req, res) => {
    console.log("GET / ", req.params)
    resString = "product with id: " + req.params.id;
    //console.log(resString)
    res.send(resString)
})
