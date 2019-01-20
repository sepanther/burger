var orm = require("../config/orm.js");

orm.selectAll(burgers);

orm.insertOne(burgers, "bronte", true)

module.exports = Burger;