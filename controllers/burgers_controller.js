var express = require("express");
var burger = require("../models/burgers.js")
var connection = require("../config/connection.js");

var router = express.Router();

router.get("/", function(req, res) {
    console.log('hi');
    connection.query("SELECT * FROM burgers", function(err, data) {
        if (err) throw err;
        res.render("index", { burgers: data });
    })
    burger.selectAll();
    // burger.selectAll(function(err, data) {
    //     if (err) throw err;
    //     console.log(data);
    //     res.render(data);
    //     res.render('index', data);
    // });
})

module.exports = router;