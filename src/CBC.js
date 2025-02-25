import React, { Component } from "react";

export default class cbc extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>I am a CBC in React having the props data {this.props.value}</p>
      </div>
    );
  }
}
