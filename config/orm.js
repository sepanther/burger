var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            return result;
        })
    },
    insertOne: function(tableInput, burgerName, devoured) {
        var queryString = "INSERT INTO ?? VALUES (?, ?)";
        connection.query(queryString, [tableInput, burgerName, devoured], function(err, result) {
            if (err) throw err;
            return result;
        })
    }
}

module.exports = orm;