// Business Logic

// Dice Function.
var dice = {
  sides: 6,
  roll: function () {
  var randomNumber = Math.floor(Math.random() * this.sides +1);
    return randomNumber
  }
}

// print element to page
function printNumber(number) {
  var dice1 =
$(".dice-1").innerHTML;
dice1 = number;
  // dice1.innerHTML = number;
}

// User Logic

$(document).ready(function(){
  $("#easy").click(function(event){
    event.preventDefault();
    var result = dice.roll();
    $(".dice-1").text(result);
  });
});
