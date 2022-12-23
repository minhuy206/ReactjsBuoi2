import React, { Component } from "react";
import ListGlasses from "./ListGlasses";
import ModelLeft from "./ModelLeft";
import ModelRight from "./ModelRight";

export default class Body extends Component {
  state = {
    glasses: {},
  };

  getGlasses = (glasses) => {
    this.state.glasses = glasses;
    this.setState({
      glasses: this.state.glasses,
    });
  };

  render() {
    return (
      <>
        <section>
          <div
            className="d-flex align-items-center justify-content-around"
            style={{ padding: "150px" }}
          >
            <ModelLeft glasses={this.state.glasses} />
            <ModelRight />
          </div>
        </section>
        <section>
          <ListGlasses getGlasses={this.getGlasses} />
        </section>
      </>
    );
  }
}
