
var sleepCheck = function (numHours) {
    if (numHours >=8)
        return "You're getting plenty of sleep! Maybe even too much!";
    else
        return "Get some more shut eye!";
}

//calling fn
sleepCheck(10);
sleepCheck(5);
sleepCheck(8);