import React, { Component } from "react";

export default class ModelLeft extends Component {
  render() {
    const { glasses } = this.props;
    const GlassesInfoStyle = {
      position: "absolute",
      bottom: "0",
      left: "0",
      background: "#41295a",
      background: "linear-gradient(to right, #2F0743, #41295a)",
    };
    return (
      <div style={{ position: "relative" }}>
        <img width={"300px"} src="./images/model.jpg" alt="" />
        <div style={GlassesInfoStyle}>
          <h5>{glasses.name}</h5>
          <h5>{glasses.price}</h5>
          <h5>{glasses.desc}</h5>
        </div>
      </div>
    );
  }
}
