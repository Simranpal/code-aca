var friends = new Object();

friends.john = { 
    firstName : "John",
    lastName : "Doe", 
    number : 1234,
    address: ['One Microsoft Way','Redmond','WA','98052']
    };
friends.noah = { 
    firstName : "Noah",
    lastName : "Gill", 
    number : 25678, 
    address: ['One Microsoft Way','Redmond','WA','98052']
    };
friends.bill = { 
    firstName : "Bill",
    lastName : "Young", 
    number : 3891011, 
    address: ['One Microsoft Way','Redmond','WA','98052']
    };
friends.steve = {
    firstName : "Steve",
    lastName : "Jobs", 
    number : 456574,
    address: ['One Microsoft Way','Redmond','WA','98052']
    };
    
var search = function(name) {
    
    for (var key in friends) {
      if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
       }  else console.log("No match found");
    }
   
}