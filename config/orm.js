var connection = require("./connection.js");

var orm = {
  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function (err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";

    connection.query(queryString, [table, cols, vals], function (err) {
      if (err) throw err;
      console.log("Success fully added new burger");
      cb();
    });
  },
  updateOne: function (table, vals, id, cb) {
    var queryString = "UPDATE ?? SET " + vals + " WHERE " + id;

    connection.query(queryString, [table], function (err) {
      if (err) throw err;
      cb();
    });
  },
};

module.exports = orm;
