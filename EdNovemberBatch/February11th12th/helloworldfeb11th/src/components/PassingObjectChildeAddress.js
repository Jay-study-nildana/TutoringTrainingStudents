//PassingObjectChildeAddress.js

import React from "react";

const PassingObjectChildeAddress = ({Object1}) => (
    <div>
              <div className="container-fluid text-center">

        <h2>City : {Object1.address.city}</h2>
        <h2>State : {Object1.address.state}</h2>
        <h2>Country : {Object1.address.country}</h2>

                </div>
    </div>
);

export default PassingObjectChildeAddress;

