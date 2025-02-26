import React, { useState } from "react";
export const FormWithErrMsg = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
    if (name === "" && password === "") {
      setErrMsg("Please Enter Your Credentials");
    } else if (name === "") {
      setErrMsg("First Please Enter Your Name");
    } else if (password === "") {
      setErrMsg("Please Enter Your Security");
    } else if (name !== "" && password !== "") {
      setErrMsg("");
    }
  };
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <input type="submit" className="mt-2" />
          <br />
        </form>
        <p style={{ color: "red" }}>{errMsg}</p>
      </center>
    </div>
  );
};
