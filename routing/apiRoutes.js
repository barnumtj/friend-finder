var express = require("express");
var friendslist = require('../data/friends.js')

module.exports = function(app){
// Create a function for handling the requests and responses coming into our server
app.get("/api/friends", function (req, res) {
  
    res.json(friendslist);
});

app.post('/api/friends', function(req, res){

	// setting a variable for the user's response
    var userInfo = req.body;
    // var userParse = JSON.parse(userInfo)
    console.log(userInfo.name)
    // res.send(userInfo)
    friendslist.push(userInfo);
    res.send(JSON.stringify(userInfo))

// compare userinfo against friendslist, math abs
// { name, photo, scores } = req.body
});

}