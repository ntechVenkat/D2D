import React from "react";
import HOC from "./HOC";

const AC1 = (props) => {
  return (
    <div>
      <center>
        <h1>Need Authentication Component1</h1>
        <h2>{props.authStatus}</h2>
      </center>
    </div>
  );
};
export default HOC(AC1);
