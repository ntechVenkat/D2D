import React from "react";

const Child = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.add("Bike");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Child;
