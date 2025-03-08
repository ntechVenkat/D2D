import React, { useState } from "react";

const TwoWayBinding = (props) => {
  const [inputs, setInputs] = useState(props.credentials);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputs.name, inputs.password);
  };

  let changeHandler = (e) => {
    let { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div>
      <center>
        <h1>JS Two Way data Binding in Forms onChange()</h1>
        {/* {inputs.name} */}
        <br />
        {/* {inputs.password} */}
        <br />
        <form onSubmit={submitHandler}>
          <label htmlFor="name">User Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={inputs.name}
            id="name"
            onChange={changeHandler}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={inputs.password}
            id="password"
            onChange={changeHandler}
          />
          <br />
          <input type="submit" />
        </form>
      </center>
    </div>
  );
};
export default TwoWayBinding;
