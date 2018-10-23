// Business Logic

// Dice Function.
var dice = {
  sides: 6,
  roll: function () {
  var randomNumber = Math.floor(Math.random() * this.sides +1);
    return randomNumber
  }
}



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
