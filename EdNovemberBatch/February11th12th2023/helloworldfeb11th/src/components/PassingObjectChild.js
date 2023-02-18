//PassingObjectChild.js

import React from "react";
import PassingObjectChildeAddress from "./PassingObjectChildeAddress";

const PassingObjectChild = ({Object1}) => (
    <div>
              <div className="container-fluid text-center">
        {/* <h1>Hello There.This is Passing Object Child</h1>
        <h1>This will get the data from the parent component</h1>
        <h1>and then show it.</h1> */}
        <h2>Name : {Object1.name}</h2>
        <h2>Age : {Object1.age}</h2>
        <h2>Profession : {Object1.profession}</h2>
        {/* <h2>City : {Object1.address.city}</h2>
        <h2>State : {Object1.address.state}</h2>
        <h2>Country : {Object1.address.country}</h2> */}


        <PassingObjectChildeAddress Object1 = {Object1}/>

                </div>
    </div>
);

export default PassingObjectChild;