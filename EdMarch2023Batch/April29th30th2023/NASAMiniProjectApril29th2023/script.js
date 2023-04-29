console.log(`hello hello`);

let imagedefault = "https://wallsdesk.com/wp-content/uploads/2016/09/Ameesha-Patel-Pictures.jpg";
let imageloading = "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksete.jpg";

let DOMimagefordisplay = document.getElementById("imagefordisplay");
DOMimagefordisplay.src = imagedefault;

let DOMtitle = document.getElementById("title");
let DOMdate = document.getElementById("date");
let DOMexplanation = document.getElementById("explanation");

function loadNASAData() {
    console.log(`Entering loadNASAData function`);

    DOMimagefordisplay.src = imageloading;

    //API details
    let APIfullEndPoint = "https://api.nasa.gov/planetary/apod?api_key=JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6";

    console.log(APIfullEndPoint);

    fetch(APIfullEndPoint).then(
        function (response) {
            return response.json();
        }
    ).then(
        function (json) {
            console.log(json);

            //show the date. DOM is ready. 
            DOMdate.innerHTML = json.date;
            //show the explanation. DOM is ready.
            DOMexplanation.innerHTML = json.explanation;
            //show the title. DOM is ready. 
            DOMtitle.innerHTML = json.title;
            //show the image. alrady I have DOM
            DOMimagefordisplay.src = json.url;


        }
    ).catch(function (error) {
        console.log(error);
    })
        ;
}