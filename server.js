//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static("./public"))


var apiRoutes = require('./routing/apiRoutes.js'); 
var htmlRoutes = require('./routing/htmlRoutes.js');

app.use("/", htmlRoutes)
app.use("/api", apiRoutes)



// Starts the server to begin listening
app.listen(PORT, function () {
  console.log('App listening on PORT: ' + PORT);
});