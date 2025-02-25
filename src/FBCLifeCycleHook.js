import React, { useState, useEffect } from "react";
import Unmount from "./Unmount.js";

const FBCLifeCycleHook = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Mounting Phase
  //   useEffect(() => {
  //     console.log("useEffect Triggered");
  //   }, []);
  // Updating Phase
  //   useEffect(() => {
  //     console.log("useEffect Updating phase Triggered");
  //   }, [count]);

  //Unmounting Phase
  //   useEffect(() => {
  //     return () => {
  //       console.log("Unmounting Triggered");
  //     };
  //   }, []);
  return (
    <div>
      <center>
        <h1>Functional Component Lifecycle Hook</h1>
        count : {count}
        <br />
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <br />
        <Unmount />
      </center>
    </div>
  );
};
export default FBCLifeCycleHook;
