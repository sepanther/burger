var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(err, data) {
            callback(err, data);
        })
    },
    insertOne: function(burgerName, callback) {
        orm.insertOne("burgers", burgerName, function(err, data) {
            return callback(err, data);
        });
    },
    updateOne: function(burgerId, callback) {
        orm.updateOne("burgers", "devoured", true, "burgers.id", burgerId, function(err, data) {
            return callback(err, data);
        })
    }
}

module.exports = burger;