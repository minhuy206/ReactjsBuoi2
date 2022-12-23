import React, { Component } from "react";

export default class ModelLeft extends Component {
  render() {
    const { glasses } = this.props;
    const glassesContainer = {
      width: "100%",
      position: "absolute",
      top: "26%",
      backgroundImage: `url('${glasses.url}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "50px",
      backgroundSize: "contain",
    };
    const GlassesInfoStyle = {
      position: "absolute",
      bottom: "0",
      left: "0",
      backgroundColor: "#00000080",
    };
    console.log(glasses);
    return (
      <div style={{ position: "relative" }}>
        <div style={glassesContainer}></div>
        <img width={"300px"} src="./images/model.jpg" alt="" />
        <div style={GlassesInfoStyle}>
          <h5 style={{ color: "white" }}>{glasses.name}</h5>
          <h5 style={{ color: "white" }}>{glasses.price}</h5>
          <h5 style={{ color: "white" }}>{glasses.desc}</h5>
        </div>
      </div>
    );
  }
}
