const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello From Docker Demo Project!");
});

app.listen(3000);
