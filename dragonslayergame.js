//variable to check if we're still slaying
var slaying = true;

//a variable to check if we hit the dragon using a random number that's either 0 or 1
var youHit = Math.floor(Math.random() * 2);
console.log("youHit : " +youHit);

//variable to keep track of damage we did the dragon this round(1 to 5)
var damageThisRound = Math.floor(Math.random()*5 + 1);

//variable to keep track of total damage
var totalDamage = 0;

while(slaying) {
    if(youHit === 1) {
        console.log("Thou Hit the Dragon!!");
        totalDamage += damageThisRound;
        if(totalDamage >= 4) {
            console.log("Killed the Dragon!!");
            slaying = false;
        }
    } else {
        console.log("You got hit");
    }
    slaying = false;
}