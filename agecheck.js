// Check if the user is ready to play!
confirm("Are you ready to play the game?");

//get user's age
var age = prompt("What is your age?");

if(age < 13) {
console.log("You can play the game but it is now our responsibility...");
}
else {
console.log("Play on");
}