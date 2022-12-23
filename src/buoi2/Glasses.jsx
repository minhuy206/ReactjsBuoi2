import React, { Component } from "react";

export default class Glasses extends Component {
  render() {
    const { glasses, getGlasses } = this.props;
    return (
      <div className="col-2">
        <img
          width={"150px"}
          src={glasses.url}
          onClick={() => {
            getGlasses(glasses);
          }}
        />
      </div>
    );
  }
}
