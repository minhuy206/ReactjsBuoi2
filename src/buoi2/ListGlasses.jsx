import React, { Component } from "react";
import Glasses from "./Glasses";

let dataGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./images/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./images/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./images/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./images/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./images/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./images/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./images/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./images/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./images/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class ListGlasses extends Component {
  renderListGlasses = () => {
    const { getGlasses } = this.props;

    return dataGlasses.map((glasses, index) => {
      return (
        <Glasses glasses={glasses} getGlasses={getGlasses} key={glasses.id} />
      );
    });
  };

  render() {
    const listGlassesStyle = {
      background: "#3494E6",
      background: "-webkit-linear-gradient(to right, #EC6EAD, #3494E6)",
      background: "linear-gradient(to right, #EC6EAD, #3494E6)",
    };
    return (
      <div className="pt-5 px-5 text-center container">
        <div className="row p-5" style={listGlassesStyle}>
          {this.renderListGlasses()}
        </div>
      </div>
    );
  }
}
