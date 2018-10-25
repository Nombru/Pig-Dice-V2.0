// Business Logic
var player1="";
var player2="";

// Dice Function.
var diceRoll = function () {
  var randomNumber = Math.floor(Math.random() * 6 +1);
    return randomNumber
  }
 //player object
 function Player(){
   this.roll = 0;
   this.roundScore = 0;
   this.totalScore = 0;
   this.playerName = "";
 };
 //prototype to check for one
 Player.prototype.rollOne =  function(){
   if(this.roll === 1){
     this.roundScore = 0;
     alert("Aw dang, " + this.playerName + ", you rolled a 1, your turn is OVER. You get NOTHING.");
   }else{
     this.roundScore += this.roll;
   }
 }
//prototype for hold
Player.prototype.hold = function(){
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  alert(this.playerName + ", your turn is over. Your current score is " + this.totalScore)
}
//check for win condition
Player.prototype.checkWin = function(){
  if(this.totalScore >= 100){
    ///trophy screen
    $(".winner").show();
  }
}
//clear values for new game

// User Logic

$(document).ready(function(){
  $("#start").click(function(event){
    event.preventDefault();
    player1 = new Player;
    player2 = new Player;
    $("#start").fadeOut("slow")
    $(".game").fadeIn("slow")
    $(".reset").fadeIn("slow")
    var playerName1 = prompt("What's your name playa?");
    var playerName2 = prompt("What's your name playa?");

    player1.playerName=playerName1;
    player2.playerName=playerName2;
    $("#playerName1").text(playerName1 + ":");
    $("#playerName2").text(playerName2 + ":");
    console.log(player1, player2);
  });
// Player One Roll
  $("#roll1").click(function(){
    player1.roll = diceRoll();
    $("#dice-num").text(player1.roll);
    player1.rollOne();
    $(".tally").text(player1.roundScore)
  });
// Player Two Roll
  $("#roll2").click(function(){
    player2.roll = diceRoll();
    $("#dice-num").text(player2.roll);
    player2.rollOne();
    $(".tally").text(player2.roundScore)
  });

// Player One Hold
  $("#hold1").click(function(){
    player1.hold();
    $("#player-1-score").text(player1.totalScore);
    $(".tally").empty();
    $("#dice-num").empty();
    player1.checkWin();
  })
// Player Two Hold
    $("#hold2").click(function(){
      player2.hold();
      $("#player-2-score").text(player2.totalScore);
      $(".tally").empty();
      $("#dice-num").empty();
      player2.checkWin();
    })
  //winner button to reveal prize
  $("#win").click(function() {
    $("#pig").fadeIn(fast);
  });
});
