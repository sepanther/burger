var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        console.log("inside burger.js")
        orm.selectAll("burgers", function(err, data) {
            console.log("even more inside")
            callback(err, data);
        })
    },
    insertOne: function(burgerName) {
        return orm.insertOne("burgers", burgerName);
    }
}

module.exports = burger;