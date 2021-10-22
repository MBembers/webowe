const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(cookieParser())

app.listen(PORT, () => {
    console.log("start serwera na porcie " + PORT)
})

app.get('/', (req, res) => {
  console.log("cookies :  ", req.cookies);
  res.cookie("first", Date, { expires: new Date(Date.now()) , httpOnly:true})
  res.send('first zostało ustawione')
});

