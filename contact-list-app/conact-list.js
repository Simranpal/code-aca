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
    address: ['Galardi Way','Burnaby','BC','V5A 1S7']
    };
friends.bill = { 
    firstName : "Bill",
    lastName : "Young", 
    number : 3891011, 
    address: ['Curtis Road','Coquitlam','BC','M3V 5D1']
    };
friends.steve = {
    firstName : "Steve",
    lastName : "Jobs", 
    number : 456574,
    address: ['Nanaimo St','Victoria','BC','W3A 9D2']
    };
    
var search = function(name) {
    
    for (var key in friends) {
      if(friends[key].firstName === name) {
            console.log(friends[key]);
            return friends[key];
       }  else console.log("No match found");
    }
   
}