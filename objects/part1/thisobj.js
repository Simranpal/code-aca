// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50);

// another object, giving her an initial age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;


// update Susan's age to 35 using the method
susan.setAge(35);