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
  res.status(404).send("what???");
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});
app.listen(3000, () => {
  console.log("Listening on 3000");
});
