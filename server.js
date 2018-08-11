var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add the application routes
require( './app/routing/apiRoutes')(app);
require( './app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log("Friend Finder App listening on PORT: " + PORT);
  });
  