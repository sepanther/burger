var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        console.log("inside burger.js")
        orm.selectAll("burgers", function(err, data) {
            console.log("even more inside")
            callback(err, data);
        })
    },
    insertOne: function(burgerName, callback) {
        orm.insertOne("burgers", burgerName, function(err, data) {
            return callback(err, data);
        });
    }
}

module.exports = burger;