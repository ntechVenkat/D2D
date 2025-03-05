import React, { Component } from "react";

export default class Trail1 extends Component {
  constructor(props) {
    super(props);
    this.y = 5;
  }
  render() {
    return <div>{this.props.add} Trail1</div>;
  }
}
