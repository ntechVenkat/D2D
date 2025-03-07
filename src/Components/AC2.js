import React from "react";
import HOC from "./HOC";

const AC2 = (props) => {
  return (
    <div>
      <h1>Need Authentication Component2</h1>
      <h2>{props.authStatus}</h2>
    </div>
  );
};

export default HOC(AC2);
