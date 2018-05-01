
var friends = [

    {
      customerName: "Ahmed",
      photo: "",
      scores: [5,1,4,4,5,1,2,5,4,1],
        sum: 0,
      concater: function() {
          for(var i = 0; i < this.scores.length; i++){
          this.sum = this.sum + this.scores[i];
          
          }
      }
    },
    {

    }
  ];
  module.exports = friends;
