var movies = {};
movies.toy_Story_2 = { 
    name   : "Toy Story 2",
};
movies.finding_Nemo = {
    name   : "Finding Nemo",
};
movies.the_Lion_King = {
    name   : "The Lion King",
};

var getReview = function (movie) {
    switch(movie) {
        case movies.toy_Story_2.name   : return  "Great story. Mean prospector.";
        case movies.finding_Nemo.name  : return  "Cool animation, and funny turtles.";
        case movies.the_Lion_King.name : return  "Great songs.";
        default : return "I don't know!";
    }
};