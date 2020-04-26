var connection = require("./connection.js");

var orm = {
    selectAll = function(){
        var queryString = "SELECT * FROM burger";
        connection.query(queryString,function(err,result){
            if(err) throw err;
            console.log(result);
        })
    },
    insertOne = function(newBurger){
        var queryString = "INSERT INTO burger (burger_name) VALUES (?)";

        connection.query(queryString,[newBurger],function(err){
            if(err) throw err;
        })
    },
    updateOne = function(burgerID){
        var queryString = "UPDATE burger SET devoured = true WHERE id = ?";
        connection.query(queryString,[burgerID],function(err){
            if(err) throw err;
        })
    }
}
  
module.exports = orm;
  