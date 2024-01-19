import React from "react";
function AccessObject() {
  let name = {
    firstName: "Shubham",
    lastName: "Rajput",
  };
  return (
    <React.Fragment>
      <h1>{name.firstName + " " + name.lastName}</h1>
    </React.Fragment>
  );
}

export default AccessObject;
