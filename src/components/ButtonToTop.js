import React, { Component } from "react";
import icon from "../images/backtotop.png";
import"neomorphism/dist/neomorphism.css";
export default class ButtonToTop extends Component {
  backtoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  addstyling() {
    if (this.props.showBtn === true) {
      return { visibility: "visible",backgroundColor:"#DFEEF4" };
    } else {
      return { visibility: "hidden",backgroundColor:"#DFEEF4" };
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
