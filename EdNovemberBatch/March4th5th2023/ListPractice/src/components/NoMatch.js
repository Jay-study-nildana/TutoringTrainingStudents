let simpleMessage = `OH MY GOD!!!`;
let simpleMessage2 = `THIS PAGE DOES NOT EXIST!!!`;
let simpleMessage3 = `NOOOOOOOOOOOOOOOOO!!!`;

const NoMatch = () => (
  <div className="text-center">
    <div>
      <h1>{simpleMessage}</h1>
      <h1>{simpleMessage2}</h1>
      <p>
        Go ahead, put any path of your choice, and you will get this, not found,
        page
      </p>
      <p>
        for example, http://localhost:3000/monkey or
        http://localhost:3000/boldshoot
      </p>
      <h1>{simpleMessage3}</h1>
    </div>
    <div>
      <hr></hr>
      <img
        src="https://sandkdesignstudioin.files.wordpress.com/2022/10/showcaseoneoctober13thwatermarkseti.jpg"
        className="img-fluid"
        alt="..."
      ></img>
      <br></br>
      <p>
        Photo by{" "}
        <a href="https://sandkdesignstudio.in/portfolio/">sandkdesignstudio</a>{" "}
      </p>
      <hr></hr>
    </div>
  </div>
);

export default NoMatch;
