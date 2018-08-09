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
    // console.log(userInfo.name)
    // res.send(userInfo)
    friendslist.push(userInfo);
   


    let bestFriend = compareUser(userInfo)
    // console.log(bestFriend)
    res.json(bestFriend)







// compare userinfo against friendslist, math abs
// { name, photo, scores } = req.body
});

}

function compareUser(user) {
    let bestScore = 1000;
    let bestFriend;
    let friendsScore = 0
    let userScore = 0
    let friendsArray = []
    for (let i = 0; i < user.scores.length; i++) {
        userScore += parseInt(user.scores[i]);
        // console.log(userScore)
    } 
    for (let j = 0; j < friendslist.length; j++) {
        let currentFriend = friendslist[j];
       
      
        for (let j = 0; j < currentFriend.scores.length; j++) {
            
            friendsScore += parseInt(currentFriend.scores[j])
            
           
            
        }
        let score = Math.abs(userScore - friendsScore)
        if (score < bestScore) {
            bestScore = score;
            bestFriend = currentFriend;
            
        }
    } return bestFriend
}