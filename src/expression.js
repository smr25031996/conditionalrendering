import React from "react";
function Expressions() {
  let x = 35;
  let y = 50;
  return (
    <React.Fragment>
      <h1> Evaluating Expressions</h1>
      <h3>X={x}, Y={y}</h3>
      <h3>{x +">"+y+":"}{x>y?"true":"false"}</h3>

    </React.Fragment>
  );
}
export default Expressions;
