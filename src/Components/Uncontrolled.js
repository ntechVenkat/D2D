import React, { useRef, useState } from "react";
export const Uncontrolled = () => {
  const inputRef = useRef("");
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    setName(inputRef.current.value);
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <input type="text" id="name" ref={inputRef} />
          <br />
          <input type="submit" />
        </form>
        Output by DOM : {name}
      </center>
    </div>
  );
};
