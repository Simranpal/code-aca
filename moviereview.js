var movies = {};
movies.toy_Story_2 = { 
    name   : "Toy Story 2",
    review : "Great story. Mean prospector."
};
movies.finding_Nemo = {
    name   : "Finding Nemo",
    review : "Cool animation, and funny turtles."
};
movies.the_Lion_King = {
    name   : "The Lion King",
    review : "Great songs."
};

var getReview = function (movie) {
    for(var key in movies) {
        if(movies[key].name === movie)
            return movies[key].review;
        else
            return "I don't know!";
    }
};