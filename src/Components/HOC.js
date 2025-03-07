import React from "react";

const HOC = (Component) => {
  return () => {
    let authentication = true;
    return (
      <>
        <center>
          {authentication ? (
            <Component authStatus={"Authentication Verified"} />
          ) : (
            <h1>Please Login!!</h1>
          )}
        </center>
      </>
    );
  };
};
export default HOC;
