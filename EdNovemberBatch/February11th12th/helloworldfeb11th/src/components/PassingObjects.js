//PassingObjects.js

import React from "react";

import PassingObjectChild from "./PassingObjectChild";


//create a dummy json object

const dummyObject = {

    name: "Ameesha Patel",

    age: 30,

    profession: "Actress",

    address: {

        city: "Mumbai",

        state: "Maharashtra",

        country: "India",

    },

};


//create a json object about super heroes

const superHeroes = [

    {

        name: "Batman",

        age: 30,

        profession: "Super Hero",

        address: {

            city: "Gotham",

            state: "New York",

            country: "USA",

        },

    },

    {

        name: "Superman",


        age: 30,

        profession: "Super Hero",

        address: {

            city: "Metropolis",

            state: "New York",

            country: "USA",

        },

    },
]



const PassingObjects = () => (
    <div>
              <div className="container-fluid text-center">
        <h1>Hello There.This is Passing Objects</h1>
        <hr></hr>
        <PassingObjectChild Object1 = {dummyObject}/>
        <hr></hr>
        <PassingObjectChild Object1 = {superHeroes[0]}/>
        <hr></hr>
        <PassingObjectChild Object1 = {superHeroes[1]}/>

        <hr></hr>
                </div>
    </div>
);

export default PassingObjects;