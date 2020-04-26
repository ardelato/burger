var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res){
          cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals) {
      orm.create("burgers", cols, vals);
    },
    update: function(objColVals, condition) {
      orm.update("burgers", objColVals, condition);
    }
  };
  
  // Export the database functions for the controller (catsController.js).
module.exports = burger;
  