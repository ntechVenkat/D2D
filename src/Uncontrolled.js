import React from "react";

export default function Uncontrolled() {
  const inputRef = React.useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    alert(inputRef.current.value);
  };
  return (
    <div>
      <center>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={submitHandler}>
          <input type="text" ref={inputRef} />
          <input type="submit" value="submit" />
        </form>
      </center>
    </div>
  );
}
