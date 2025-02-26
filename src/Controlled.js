import React from "react";
import ControlledByOther from "./ControlledByOther.js";

const Controlled = () => {
  const [name, setName] = React.useState("Controlled");
  const changeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <center>
        <h1>Controlled Component</h1>
        Name : {name}
        <form>
          <input type="text" value={name} onChange={changeHandler} />
        </form>
        <ControlledByOther changeHandler={changeHandler} />
      </center>
    </div>
  );
};
export default Controlled;
