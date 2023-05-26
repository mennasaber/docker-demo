const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello From Docker Demo project");
});

app.listen(3000);
