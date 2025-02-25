import React, { useState } from "react";

const Form = () => {
  const [errMsg, setErrMsg] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNameEvent = (e) => {
    setName(e.target.value);
  };
  const onChangePasswordEvent = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrMsg("Name Shoudn't Empty");
    } else if (password === "") {
      setErrMsg("Password Shoudn't Empty");
    }
  };
  return (
    <div>
      <center>
        <h1>Form</h1>
        <form onSubmit={onSubmitEventHandler}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Please Enter your Name"
            onChange={onChangeNameEvent}
            value={name}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={onChangePasswordEvent}
          />
          <br />
          <input type="submit" />
          <br />
          <p>{errMsg}</p>
        </form>
      </center>
    </div>
  );
};
export default Form;
