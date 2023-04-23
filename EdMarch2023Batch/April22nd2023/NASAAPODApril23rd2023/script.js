let defaultsentence = "NOTHING HERE YET";
let defaultImage = "https://wallsdesk.com/wp-content/uploads/2016/09/Ameesha-Patel-Pictures.jpg";

function hellofromButton()
{
  console.log(`Hey, hellofromButton, the button was clicked!`);
  
  let domforthebutton1 = document.getElementById("forthebutton1");
  domforthebutton1.innerHTML="You have clicked the button";
}

function changeImage()
{
  console.log(`Hey, changeImage, the button was clicked!`);
  
  //https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksete.jpg
  
  let domfortheimage = document.getElementById("imageofameesha");
  domfortheimage.src = "https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarksete.jpg";
}

function resetEverything() {
    let domforthebutton1 = document.getElementById("forthebutton1");
  domforthebutton1.innerHTML=defaultsentence;
    let domfortheimage = document.getElementById("imageofameesha");
  domfortheimage.src = defaultImage;
}