/*jshint multistr:true */
//text to scan
var text = "text text text text Simran text text text Simran text";
var myName = "Simran";

var hits=[];

for(var i = 0; i < text.length; i++) {    
    //if first letter in the name is found in text
    if(text[i] === myName[0]) {
        //add characters to array until we hit the length of the user's name
        for(var j = i; j < i+ myName.length; j++) {
            hits.push(text[j]);
        }
    }
}    

//log hits
if(hits.length > 0) {
    console.log(hits);
} else {
    console.log("Your name wasn't found!");
}