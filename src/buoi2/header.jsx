import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const headerStyle = {
      backgroundColor: "#000000a8",
      position: "absolute",
      width: "100%",
      height: "10vh",
    };

    return (
      <header style={headerStyle}>
        <h3
          className="text-white text-center text-uppercase"
          style={{ lineHeight: "10vh" }}
        >
          Try glasses app online
        </h3>
      </header>
    );
  }
}
