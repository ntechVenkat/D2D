import React, { Component } from "react";
import Trail1 from "./Trail1.js";

export class Trail extends Component {
  constructor() {
    super();
    this.ABC = {
      name: "JS",
    };
    console.log(this);
  }
  //   x = 2;
  static x = 2;
  //   static add = () => {
  //     return 2 + 3;
  //   };

  render() {
    return (
      <div>
        <h1>Can I define the State Object Name with Other! Yes.</h1>
        <h2>{this.ABC.name}</h2>
        {/* Normal Variable : {Trail.x} */}
        <br />
        Static Variable : {this.x}
        <Trail1 />
      </div>
    );
  }
}
