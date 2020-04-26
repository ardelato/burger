var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/",function(req,res){
    burger.selectAll(function(results){
        var handleBarsObject = {burgers:results};
        console.log(handleBarsObject);
        res.render("index",handleBarsObject);
    });
});

// Will need additional API Calls

module.exports = router;