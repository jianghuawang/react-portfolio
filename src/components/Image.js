import React, { Component } from "react";
export default class Image extends Component {
  render() {
    return (
      <div>
        <img
          className="image-picture modal-custom "
          src={this.props.image.src}
          alt={this.props.image.description}
          onClick={() => this.props.onEnlarge(this.props.image)}
        />
      </div>
    );
  }
}
