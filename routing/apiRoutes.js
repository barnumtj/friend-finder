var express = require("express");
var friendslist = require('../data/friends.js')

let route = express.Router()


// Create a function for handling the requests and responses coming into our server
route.get("/friends", function (req, res) {
  
    res.json(friendslist);
});

route.post('/friends', function(req, res){

	// setting a variable for the user's response
    var userInfo = req.body;
    // var userParse = JSON.parse(userInfo)
    // console.log(userInfo.name)
    // res.send(userInfo)
  
   


    let bestFriend = compareUser(userInfo)
    console.log(bestFriend)
    friendslist.push(userInfo);
    res.json(bestFriend)
    
// compare userinfo against friendslist, math abs
// { name, photo, scores } = req.body
});



function compareUser(user) {
    let bestScore = 1000;
    let bestFriend;
    
    let userScore = 0
    let friendsArray = []
    for (let i = 0; i < user.scores.length; i++) {
        userScore += parseInt(user.scores[i]);
        // console.log(userScore)
    } 
    for (let j = 0; j < friendslist.length; j++) {
        let currentFriend = friendslist[j];
        let friendsScore = 0
       
      
        for (let j = 0; j < currentFriend.scores.length; j++) {
            
            friendsScore += parseInt(currentFriend.scores[j])
            // console.log(friendsScore)
            
        }
        let score = Math.abs(userScore - friendsScore)
        if (score < bestScore) {
            bestScore = score;
            friendsArray = [currentFriend]
            // bestFriend = currentFriend;
            // console.log(bestFriend)
                        
            
        } else if (score === bestScore){
            friendsArray.push(currentFriend)
        }
    }
    let rand = Math.floor(Math.random() * friendsArray.length) 
    console.log(friendsArray)
    return friendsArray[rand]
}

module.exports = route