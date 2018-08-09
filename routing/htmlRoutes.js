var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var route = express.Router();








// Create a function for handling the requests and responses coming into our server
route.get("/", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  route.get("/survey", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });



module.exports = route