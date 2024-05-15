//npm run-script api
var express = require("express");
var cors = require("cors");
var app = express();
var fs = require("fs");
const hypertro = require("./Hypertro.cjs");
app.get("/:prompt", cors(), function (req, res) {
  hypertro.run(req.params.prompt).then((data) => {
    res.end(data);
  });
});
var server = app.listen(10000, "0.0.0.0", function () {
  console.log("Express App running at http://0.0.0.0:10000/");
});
