import React, { Component } from "react";
import { LifecycleChild } from "./LifecycleChild";

export class LifecycleParent extends Component {
  constructor() {
    super();
    // console.log("Constructor()");
    this.state = { parent: 10, show: true };
  }
  //   shouldComponentUpdate = () => {
  //     return false;
  //   };

  render() {
    // console.log("Render()");
    return (
      <div>
        <h1>Hi, I'm a Parent Component</h1>
        I'm from Parent : {this.state.parent}
        <br />
        <button
          onClick={() => {
            this.setState({ parent: this.state.parent + 10 });
            // console.log(this.state.parent);
          }}
        >
          Click
        </button>
        <button
          onClick={() => {
            this.setState({ ...this.state, show: false });
          }}
        >
          Hide
        </button>
        <button
          onClick={() => {
            this.setState({ ...this.state, show: true });
          }}
        >
          Show
        </button>
        {this.state.show && <LifecycleChild parentProp={this.state.parent} />}
      </div>
    );
  }
}
