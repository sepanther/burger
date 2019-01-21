var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
var burger_controller = require("./controllers/burgers_controller.js");
app.use(burger_controller);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  