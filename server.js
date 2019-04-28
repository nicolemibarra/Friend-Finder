var mysql = require('mysql');

// Initialize connection
var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-03.cleardb.net',
// Port
  port: 8080,
// Username
  user: "b5b149443c50e7",
// Password
  password: "64c3186b",
//Database
database: 'heroku_575e5ff7e5b39e9'
});

// Create connection 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }

// Dependencies
var express = require("express");
var path = require("path");

// Express
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static('app/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});