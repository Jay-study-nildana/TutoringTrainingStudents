//InputStuff.js

//import PassingObjectsSupportOne from "./PassingObjectsSupportOne";
import { useState } from "react";
import { useEffect } from "react";

//rendered component

const InputStuff = () => {
  const [quoteContent, setquoteContent] = useState("");
  const [quoteContentMimic, setquoteContentMimic] = useState("");

  useEffect(() => {
    console.log(quoteContent);
    setquoteContentMimic(quoteContent);
    console.log(quoteContentMimic);

    if (quoteContent.length === 0) {
      let someMessage = `nothing has been typed yet`;
      setquoteContentMimic(someMessage);
    }
  }, [quoteContent, quoteContentMimic]);

  function clearEverything() {
    console.log(`input has been cleared`);
    setquoteContent(``);
  }
  const stuff = (
    <div>
      {/* <PassingObjectsSupportOne Object1={someObject1} Object2={someObject2} /> */}
      <div className="container-fluid text-center">
        <div>
          <div>
            <p>Type something in the input box. </p>
            <input
              type="text"
              className="form-control"
              placeholder="enter anything you want"
              onChange={(e) => setquoteContent(e.target.value)}
              value={quoteContent}
            />
            <p>You are typing : {quoteContentMimic}</p>
          </div>
          <div>
            {/* <Button onClick={clearEverything}>Clear Everything</Button> */}
            <button
              type="button"
              className="btn btn-primary"
              onClick={clearEverything}
            >
              clear input
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return stuff;
};

export default InputStuff;
