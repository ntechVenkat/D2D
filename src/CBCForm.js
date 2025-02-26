import React, { Component } from "react";

class CBCForm extends Component {
  state = {
    name: "CBC Form",
    password: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
  };

  changeHandler = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <center>
          <h1>CBC Form</h1>
          <form onSubmit={this.submitHandler}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" />
            <br />
            <input type="submit" />
            <br />
          </form>
          <h1>{this.state.name}</h1>
        </center>
      </div>
    );
  }
}
export default CBCForm;
