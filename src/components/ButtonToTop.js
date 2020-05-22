import React, { Component } from "react";
import icon from "../images/backtotop.png";
import neomorphism from "neomorphism/dist/neomorphism.css";
export default class ButtonToTop extends Component {
  backtoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  addstyling() {
    if (this.props.showBtn == true) {
      return { visibility: "visible" };
    } else {
      return { visibility: "hidden" };
    }
  }
  render() {
    return (
      <div>
        <figure className="avatar back" style={this.addstyling()} onClick={this.backtoTop}>
          <img src={icon} alt="" />
        </figure>
      </div>
    );
  }
}
