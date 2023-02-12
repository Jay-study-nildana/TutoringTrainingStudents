//InputOutuseEffectuseState.js

import React from "react";

//import useffect
import { useEffect, useState } from "react";

const InputOutuseEffectuseState = () => {


    //first you create the objects you want to work with statement management
    //useState

    const [name, setName] = useState("");
    const [displayname, setdisplayname] = useState("");
    const [a,seta] = useState(10); 
    //let a = 10;

    let somestring = "hello";

    //you update changes with use effect
    //useEffect

    function clearEverything()
    {
        setName("");
        //setdisplayname("");
    }

    useEffect (() => {

        console.log(name);
        if(name.length == 0)
        {
            console.log(`name is empty`);
            setdisplayname(`name is empty. please type something`);
        }

        else

        {
            console.log(`name is ${name}`);

            if(name == "ameesha")
            {
                setdisplayname(`${name} and she is a good girl`);
            }
            else if(name == "Jay")
            {
                setdisplayname(`${name} is the greatest tutor in the world who does not know CSS`);
            }
            else
            {
                setdisplayname(`${name} is not ameesha, and I don't like this person`);
            }

            //setdisplayname(`name is ${name}`);
        }
    }, [name,displayname]);


    //rendering stuff
    const stuff = (

            <div>
                <div className="container-fluid text-center">
                <h1>demo of input output with use effect and use state</h1>
                <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="blah blah blah"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
                </div>
                <div>
                    <h2>{displayname}</h2>
                </div>
                <div>
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
    );

    return stuff;

}

export default InputOutuseEffectuseState;