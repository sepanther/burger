var express = require("express");
var burger = require("../models/burgers.js")
var connection = require("../config/connection.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(err, data) {
        if (err) throw err;
        res.render('index', { burgers: data });
    });
})

router.post("/api/:burgerName", function(req, res) {
    var burgerName = req.body.burgerName;
    burger.insertOne(burgerName, function(err, data) {
        if (err) throw err;
        res.redirect("/")
    })
})

router.put("/api/:burgerId", function(req, res) {
    console.log("burgerID: " + req.params.burgerId)
    var burgerId = req.params.burgerId
    burger.updateOne(burgerId, function(err, data) {
        if (err) throw err;
        // res.redirect("/")
        res.json(data);
    })
})

module.exports = router;