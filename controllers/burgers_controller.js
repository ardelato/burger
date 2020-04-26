var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (results) {
    var handleBarsObject = { burgers: results };
    // console.log(handleBarsObject);
    res.render("index", handleBarsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log("Servicing POST request");
  burger.insertOne("burger_name", req.body.burger, function () {
    res.end();
  });
});

// Will need additional API Calls

module.exports = router;
