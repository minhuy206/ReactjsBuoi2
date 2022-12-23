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
      <div>
        <div className="row pt-5">
          <div className="col-4">
            <ModelLeft glasses={this.state} />
          </div>
          <div className="col-4">
            <ModelRight />
          </div>
        </div>
        <ListGlasses getGlasses={this.getGlasses} />
      </div>
    );
  }
}
