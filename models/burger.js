var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res){
          cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals,cb) {
      orm.insertOne("burgers", cols, vals,cb);
    },
    updateOne: function(objColVals, condition) {
      orm.updateOne("burgers", objColVals, condition);
    }
  };
  
  // Export the database functions for the controller (catsController.js).
module.exports = burger;
  