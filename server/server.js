const express = require("express");
const path = require("path");
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "../client/build");

const app = express();
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Listening ");
});
