var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
// Routing

app.get("/", (req, res) => {
  res.render("index");
});
app.get("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(3000, () => {
  console.log("Listening on 3000!");
});
