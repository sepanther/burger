var express = require("express");
var burger = require("../models/burgers.js")
var connection = require("../config/connection.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(err, data) {
        console.log("got here")
        if (err) throw err;
        console.log("here is the data")
        res.render('index', { burgers: data });
    });
})

module.exports = router;