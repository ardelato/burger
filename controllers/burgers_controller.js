var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/",function(req,res){
    //Going to need to add a callback funciton to the ORM and Model
    burger.selectAll();
    res.end();
});

// Will need additional API Calls

module.exports = router;