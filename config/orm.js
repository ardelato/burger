var connection = require("./connection.js");

var orm = {
    selectAll : function(table){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString,[table],function(err,result){
            if(err) throw err;
            console.log(result);
        })
    },
    insertOne : function(table,cols,vals){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString,[table,cols,vals],function(err){
            if(err) throw err;
        })
    },
    updateOne : function(table, vals, id){
        var queryString = "UPDATE ?? SET ?? WHERE ??";
    
        connection.query(queryString,[table,vals,id],function(err){
            if(err) throw err;
        })
    }
}
  
module.exports = orm;