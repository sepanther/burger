var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            return callback(err, result);
        })
    },
    insertOne: function(tableInput, burgerName) {
        var queryString = "INSERT INTO ?? VALUES (?, ?)";
        connection.query(queryString, [tableInput, burgerName], function(err, result) {
            if (err) throw err;
            return result;
        })
    }
}

module.exports = orm;