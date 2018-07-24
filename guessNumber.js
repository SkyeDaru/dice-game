

var total = 50;


////DISPLAYS THE PLAYER'S CHOICE

var push = function(user) {
  document.getElementById("choice").innerHTML = "";


  // var el = 50;
  // document.getElementById("amount").innerHTML = el;



if (user == "even" || user == "odd") {
  document.getElementById("choice").innerHTML= "You chose " + user + ".";
  }

//DISPLAY COMPUTER CHOICE /DICE PICTURE


var pics = ["dice-1.png", "dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"];
var x = Math.floor(Math.random() * pics.length);
var dice_num;


if (x == 0) {
  dice_num = "odd";
  // document.write('<img src="'+pics[0]+'" />');
} else if (x == 1) {
  dice_num = "even";
  // document.write('<img src="'+pics[1]+'" />');
} else if (x == 2) {
  dice_num = "odd";
  // document.write('<img src="'+pics[2]+'" />');
} else if (x == 3) {
  dice_num = "even";
  // document.write('<img src="'+pics[3]+'" />';
} else if (x == 4) {
  dice_num = "odd";
  // document.write('<img src="'+pics[4]+'" />');
} else {
  dice_num = "even";
  // document.write('<img src="'+pics[5]+'" />');
}


document.getElementById("picture").src = pics[x]




////////COMPARE USER TO COMPUTER AND DISPLAY RESULT OF GAME




var compare = function(choice1, choice2) {

while (total != 0) {
if (choice1 == choice2) {
  total += 10;
  document.getElementById("amount").innerHTML = "$" + total;
  return "You Win!"
} else {
    total -= 10;
    document.getElementById("amount").innerHTML = "$" + total;
    return "You Lose!";
  }
}

if (total == 0) {
  window.stop();
  alert("YOU LOSE! BYE!");
}

}


var winner = compare(user, dice_num);
document.getElementById("result").innerHTML = winner;

} ///END OF PUSH FUNCTION
