// Business Logic
var player1="",
var player2="",

// Dice Function.
var diceRoll = function () {
  var randomNumber = Math.floor(Math.random() * 6 +1);
    return randomNumber
  }
 //player object
 function Player(){
   this.roll = 0,
   this.roundScore = 0,
   this.totalScore = 0,
   this.playerName = "",
 }
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
  alert(this.playName + " , your turn is over. Your current score is " + this.totalScore)
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
  $("#easy").click(function(event){
    event.preventDefault();
    $("#easy").fadeOut("slow")
    $("#hard").fadeOut("slow")
    $(".game").fadeIn("slow")
    $(".reset").fadeIn("slow")
    var name1 = prompt("What is your name playa?");
    $("#playerName1").text(name1);
    var name2 = prompt("What is your name playa?");
    $("#playerName2").text(name2);
  });
  $("#roll1").click(function(event){
    event.preventDefault();
    var result = dice.roll();
    $("#dice-num").text(result);
  });
});
