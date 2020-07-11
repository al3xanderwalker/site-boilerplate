var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// Routing

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(80, () => {
  console.log("Listening on 80!");
});
