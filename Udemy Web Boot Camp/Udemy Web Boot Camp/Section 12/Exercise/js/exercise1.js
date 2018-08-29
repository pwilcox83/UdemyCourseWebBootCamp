var movies = [
    { title: "In Bruges", stars: 5, viewed: true },
    { title: "Frozen", stars: 4.5, viewed: false },
    { title: "Mad Max", stars: 5, viewed: true },
    { title: "Les Miserables", stars: 3.5, viewed: false }];

function listMovies(arr) {
    arr.forEach(function (movie) {
        var prepend = "";
        if (movie.viewed)
            prepend = "You have watched ";
        else
            prepend = "You have not seen ";
        console.log(prepend + "\"" + movie.title + "\" - " + movie.stars + " stars");
    });
}
listMovies(movies);

