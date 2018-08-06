var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();

var PORT = 8080;


module.exports = function(app){
// Create a function for handling the requests and responses coming into our server
app.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

};

