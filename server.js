var express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

// Parse app
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Call handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:"+ PORT);
});