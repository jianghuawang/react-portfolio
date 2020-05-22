import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div className="movie-image">
        <img
          className="modal-custom movie-poster"
          src={this.props.movie.Poster}
          alt=""
          onClick={() => this.props.onEnlarge(this.props.movie)}
        />
      </div>
    );
  }
}
