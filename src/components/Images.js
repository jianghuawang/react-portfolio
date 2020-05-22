import React, { Component } from "react";
import Image from "./Image.js";
import selftake1 from "../images/selftake1.jpeg";
import selftake2 from "../images/selftake2.jpeg";
import selftake3 from "../images/selftake3.jpeg";
import selftake4 from "../images/selftake4.jpeg";
import selftake5 from "../images/selftake5.jpeg";
import selftake6 from "../images/selftake6.jpeg";
import selftake7 from "../images/selftake7.jpeg";
import selftake8 from "../images/selftake8.jpeg";
import selftake9 from "../images/selftake9.jpeg";
import selftake10 from "../images/selftake10.jpeg";

export default class Images extends Component {
  constructor() {
    super();
    this.state = {
      activeImg: { src: "" },
    };
  }
  handleEnlarge = (image) => {
    // var frame = document.querySelector(".image-enlargeView");
    // var content = document.querySelector(".image-enlargeContent");
    // content.src = src;
    // frame.style.display = "flex";
    this.setState({ activeImg: image });
  };
  handleReturn = (e) => {
    var frame = document.querySelector(".image-enlargeView");
    if (e.target === frame) {
      this.setState({ activeImg: { src: "" } });
    }
  };
  addStyling() {
    if (this.state.activeImg.src !== "") {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  }
  render() {
    const images = [
      {
        id: 1,
        src: selftake1,
        description: "",
      },
      {
        id: 2,
        src: selftake2,
        description: "",
      },
      {
        id: 3,
        src: selftake3,
        description: "",
      },
      {
        id: 4,
        src: selftake4,
        description: "",
      },
      {
        id: 5,
        src: selftake5,
        description: "",
      },
      {
        id: 6,
        src: selftake6,
        description: "",
      },
      {
        id: 7,
        src: selftake7,
        description: "",
      },
      {
        id: 8,
        src: selftake8,
        description: "",
      },
      {
        id: 9,
        src: selftake9,
        description: "",
      },
      {
        id: 10,
        src: selftake10,
        description: "",
      },
    ];
    const items = images.map((image) => (
      <Image key={image.id} onEnlarge={this.handleEnlarge} image={image} />
    ));
    return (
      <div className="images-content">
        {items}
        <div className="image-enlargeView" style={this.addStyling()} onClick={this.handleReturn}>
          <img className="image-enlargeContent" src={this.state.activeImg.src} alt="" />
        </div>
      </div>
    );
  }
}
