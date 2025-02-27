import React, { Component } from "react";

export class LifecycleChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      child: props.parentProp,
    };

    console.log("Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived");

    return { child: props.parentProp + 10 };
  }
  shouldComponentUpdate = () => {
    return true;
  };
  getSnapshotBeforeUpdate = (prevProps, presentState) => {
    console.log(prevProps, presentState);
    return null;
  };
  componentDidMount = () => {
    console.log("Did Mount");
  };
  componentDidUpdate = () => {
    console.log("Did Update");
  };
  componentWillUnmount = () => {
    console.log("Will Unmount");
  };
  render() {
    console.log("Child Render");
    return (
      <div>
        <h1>Hi, I'm a Child Component</h1>
        Props from Parent : {this.props.parentProp}
        <br />
        I'm state from Child : {this.state.child}
      </div>
    );
  }
}
