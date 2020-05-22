import React, { Component } from "react";
import omdbconfig from "./omdbconfig.js";
import Movie from "./Movie.js";
import { NonceProvider } from "react-select";
const axios = require("axios");

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieIds: [
        "tt4154796",
        "tt0314331",
        "tt0468569",
        "tt0816692",
        "tt4633694",
        "tt0371746",
        "tt0133093",
        "tt6751668",
      ],
      movies: [],
      activeMovie: { Poster: "" },
    };
  }
  handleEnlarge = (movie) => {
    this.setState({ activeMovie: movie });
    document.body.classList.add("disable-scrolling");
  };
  handleReturn = (e) => {
    var frame = document.querySelector(".lightbox-movie-container");
    if (e.target === frame) {
      this.setState({ activeMovie: { Poster: "" } });
      document.body.classList.remove("disable-scrolling");
    }
  };
  addStyling() {
    if (this.state.activeMovie.Poster !== "") {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  }
  componentDidMount() {
    const url = "https://www.omdbapi.com/?apikey=" + omdbconfig.apiKey + "&i=";
    for (let movieid in this.state.movieIds) {
      let urlMovie = url + this.state.movieIds[movieid];
      axios.get(urlMovie).then((response) => {
        this.setState(() => {
          return { movies: [...this.state.movies, response.data] };
        });
      });
    }
  }
  render() {
    const item = this.state.movies.map((movie) => (
      <Movie key={movie.Poster} movie={movie} onEnlarge={this.handleEnlarge} />
    ));
    return (
      <div className="movie-container">
        <div className="movie-grid">{item}</div>
        <div
          className="lightbox-movie-container"
          style={this.addStyling()}
          onClick={this.handleReturn}
        >
          <div className="lightbox-movie ">
            <img
              className="movie-enlarge-view"
              src={this.state.activeMovie.Poster}
              alt=""
            />
            <div className="movie-intro">
              <h2 className="movie-name">{this.state.activeMovie.Title}</h2>
              <p className=" movie-imdb">
                Imdb Score:{" "}
                {this.state.activeMovie.Poster !== "" &&
                  this.state.activeMovie.Ratings[0].Value}
              </p>
              <p className="movie-meta">
                Meta Score:{" "}
                {this.state.activeMovie.Poster !== "" &&
                  this.state.activeMovie.Ratings[2].Value}
              </p>
              <p className="movie-description">{this.state.activeMovie.Plot}</p>
              <p className="movie-award">{this.state.activeMovie.Awards}</p>
              <p>
                Directed By{" "}
                <strong className="movie-director">
                  {this.state.activeMovie.Director}
                </strong>
              </p>
              <p className="movie-time">{this.state.activeMovie.Runtime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
