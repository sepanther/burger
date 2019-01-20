var orm = require("../config/orm.js");

var burger = {
    selectAll: function() {
        return orm.selectAll("burgers")
    },
    insertOne: function(burgerName) {
        return orm.insertOne("burgers", burgerName);
    }
}

module.exports = burger;