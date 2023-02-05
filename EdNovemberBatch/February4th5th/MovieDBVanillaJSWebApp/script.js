console.log('Hello World!');

Cocoen.parse(document.body);

SearchForMovie();

MovieDetails();

MovieImages();

//three endpoints so three fetch calls

//fetch call to get all the data

function SearchForMovie() {
    console.log(`SearchForMovie entered`); //caveman debugging - see if the function is being called


    //https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=pathaan&page=1&include_adult=false
    //build my full URI
    //base URL
    let baseURL = "https://api.themoviedb.org/3/";
    //endpoint
    let endpoint = "search/movie";
    //api key
    let apikey = "";

    let extrathings = "&language=en-US&query=pathaan&page=1&include_adult=false";

    let fullURI = baseURL + endpoint + "?api_key=" + apikey + extrathings;

    //do some caveman debugging and confirm the FULL URI is working

    console.log(fullURI);

    //fetch call

    fetch(fullURI) //waits for the api to resolve and returns a response

        .then((response) => response.json()) //convert response to json, wait for conversion to happen

        .then((data) => {
            //wait for the data to arrive as json
            console.log(`Recieved stuff using the fetch API`);
            console.log(data); //do whatever you want with it.
            UpdateMovieInformation(data);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(`SearchForMovie leaving`);
}

function MovieDetails() {
    console.log(`MovieDetails entered`); //caveman debugging - see if the function is being called

    //https://api.themoviedb.org/3/movie/864692?api_key=&language=en-US
    //build my full URI
    //base URL
    let baseURL = "https://api.themoviedb.org/3/";
    //endpoint
    let endpoint = "movie";
    //movie id
    let movieid = "864692";
    //api key
    let apikey = "";

    let extrathings = "&language=en-US";

    // let fullURI = baseURL + endpoint + "?api_key=" + apikey + extrathings;

    let fullURI = baseURL + endpoint + "/" + movieid + "?api_key=" + apikey + extrathings;

    //do some caveman debugging and confirm the FULL URI is working

    console.log(fullURI);

    // fetch call

    fetch(fullURI) //waits for the api to resolve and returns a response

        .then((response) => response.json()) //convert response to json, wait for conversion to happen

        .then((data) => {
            //wait for the data to arrive as json
            console.log(`Recieved stuff using the fetch API`);
            console.log(data); //do whatever you want with it.
            UpdateMovieInformation2(data);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(`MovieDetails leaving`);
}

function MovieImages() {
    console.log(`MovieImages entered`); //caveman debugging - see if the function is being called

    //https://api.themoviedb.org/3/movie/864692/images?api_key=

    //build my full URI
    //base URL
    let baseURL = "https://api.themoviedb.org/3/";
    //endpoint
    let endpoint = "movie";
    //movie id
    let movieid = "864692";

    let endpoint2 = "images";
    //api key
    let apikey = "";

    // let extrathings = "&language=en-US";

    // let fullURI = baseURL + endpoint + "?api_key=" + apikey + extrathings;

    // let fullURI = baseURL + endpoint + "/" + movieid + "?api_key=" + apikey + extrathings;

    let fullURI = baseURL + endpoint + "/" + movieid + "/" + endpoint2 + "?api_key=" + apikey;

    //do some caveman debugging and confirm the FULL URI is working

    console.log(fullURI);

    // fetch call

    fetch(fullURI) //waits for the api to resolve and returns a response

        .then((response) => response.json()) //convert response to json, wait for conversion to happen

        .then((data) => {
            //wait for the data to arrive as json
            console.log(`Recieved stuff using the fetch API`);
            console.log(data); //do whatever you want with it.

            UpdateMovieInformation3(data);


        })
        .catch((error) => {
            console.log(error);
        });

    console.log(`MovieImages leaving`);
}

function LetsCallAPIFetchMovieDBwithMovieID(movieid) {
    console.log(`Entering  LetsCallAPIFetchMovieDBwithMovieID ${movieid}`);
    //show the loading image.
    imgfromnasafetch.src = `images/mike-van-den-bos-jf1EomjlQi0-unsplash.jpg`;

    let baseURL = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${movieAPIkey}`;
    // let extraString = `&language=en-US&query=${query}&page=1&include_adult=false`

    fetch(baseURL) //waits for the api to resolve and returns a response
        .then((response) => response.json()) //convert response to json, wait for conversion to happen
        .then((data) => {
            //wait for the data to arrive as json
            console.log(`Recieved stuff using the fetch API`);
            console.log(data); //do whatever you want with it.
            UpdateMovieInformation(data);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log(`Leaving  LetsCallAPIFetchMovieDBwithMovieID`);
}

//this function will update the main movie details.

function UpdateMovieInformation(data) {

    console.log(`Entering  UpdateMovieInformation`);

    //show the data coming as parameter

    console.log(data);

    //update the movie details

    let resultsarray = data.results;
    let movieitem = resultsarray[0];

    console.log(movieitem);

    //get element id movietitle

    let movietitle = document.getElementById("movietitle");
    let movieoverview = document.getElementById("movieoverview");
    let movieposter = document.getElementById("movieposter");

    //update the text content

    movietitle.textContent = movieitem.original_title;
    movieoverview.textContent = movieitem.overview;

    let imageURLBase = `https://www.themoviedb.org/t/p/original`;
    let imageURL = movieitem.poster_path;
    let fullImageURL = imageURLBase + imageURL;

    console.log(fullImageURL);

    movieposter.src = fullImageURL;

    console.log(`Leaving  UpdateMovieInformation`);
}

//this function will update the main movie details.
function UpdateMovieInformation2(data) {

    console.log(`Leaving  UpdateMovieInformation2`);

    //show the data coming as parameter

    console.log(data);

    let tagline = document.getElementById("tagline");
    let RELEASEDATECOMESHERE = document.getElementById("RELEASEDATECOMESHERE");
    let votingaveragewillhere = document.getElementById("votingaveragewillhere");
    let imdbidwillcomehere = document.getElementById("imdbidwillcomehere");

    //update the text content

    tagline.textContent = data.tagline;
    RELEASEDATECOMESHERE.textContent = data.release_date;
    votingaveragewillhere.textContent = data.vote_average;
    imdbidwillcomehere.textContent = data.imdb_id;


    console.log(`Leaving  UpdateMovieInformation2`);

}

//this function will update the main movie images for the slider.

function UpdateMovieInformation3(data) {

    console.log(`Entering  UpdateMovieInformation3`);

    //show the data coming as parameter

    console.log(data);

    let backdrops = data.backdrops;

    console.log(backdrops);

    //sliderimage1 sliderimage2
    let sliderimage1 = document.getElementById("sliderimage1");
    let sliderimage2 = document.getElementById("sliderimage2");

    let imageURLBase = `https://www.themoviedb.org/t/p/original`;
    let imageURL = backdrops[0].file_path;
    let imageURL2 = backdrops[1].file_path;

    let fullImageURL = imageURLBase + imageURL;
    let fullImageURL2 = imageURLBase + imageURL2;

    console.log(fullImageURL);
    console.log(fullImageURL2);

    sliderimage1.src = fullImageURL;

    sliderimage2.src = fullImageURL2;

    console.log(`Leaving  UpdateMovieInformation3`);

}






























