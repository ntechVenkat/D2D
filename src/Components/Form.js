import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPerson, updatePersonsCount, candidateStatus } from "./Actions.js";

const Form = () => {
  let dispatch = useDispatch();
  const [name, setName] = useState("");
  const [registationId, setRegistationId] = useState(0);
  return (
    <div
      className="container"
      style={{ backgroundColor: "lightgrey", color: "white" }}
    >
      <h1>Course Registation Form</h1>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button
          className="btn btn-primary col-2"
          onClick={() => {
            dispatch(addPerson(name));
            dispatch(updatePersonsCount());
            setRegistationId(registationId + 1);
            dispatch(candidateStatus(registationId, name));
            setName("");
          }}
        >
          Add Name
        </button>
      </div>
    </div>
  );
};

export default Form;
