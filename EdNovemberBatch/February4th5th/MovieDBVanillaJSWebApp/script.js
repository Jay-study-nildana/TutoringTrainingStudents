console.log('Hello World!');

SearchForMovie();

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
        
        })
        .catch((error) => {
            console.log(error);
        });









    console.log(`SearchForMovie leaving`);
}

function MovieDetails() {
    console.log(`MovieDetails entered`); //caveman debugging - see if the function is being called

    console.log(`MovieDetails leaving`);
}

function MovieImages() {
    console.log(`MovieImages entered`); //caveman debugging - see if the function is being called

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






























