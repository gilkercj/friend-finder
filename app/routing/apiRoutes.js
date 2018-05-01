var friends = require("../data/friends.js");



module.exports = function (app) {

    app.get("/api/friends", function (req, res) {

        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var bestFriend = {
            name: "",
            photo: "",
            dif: 10000,
        };


        var newFriend = req.body;
        var dif = 0;
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            dif = 0
            for (var j = 0; j < friends[i].scores[j].length; j++) {
                dif = Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
                console.log(friends[i]);
                if (dif < bestFriend.dif) {
                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.dif = dif;
                }
            }
        }
        res.json(bestFriend);
        friends.push(newFriend);
        console.log(bestFriend);


    });
}
