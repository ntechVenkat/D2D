import { Component } from "react";

class CBCForm extends Component {
  state = {
    name: "",
    password: "",
  };
  render() {
    const changeHandler = (e) => {
      this.setState({ name: e.target.value });
    };
    const submitHndler = (e) => {
      e.preventDefault();
      console.log(this.state.name);
    };
    return (
      <div>
        <center>
          <h1>Form</h1>
          <form onSubmit={submitHndler}>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" id="name" onChange={changeHandler} />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" id="password" />
            <br />
            <input type="submit" />
            <br />
          </form>
        </center>
      </div>
    );
  }
}
export default CBCForm;
