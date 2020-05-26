import React, { Component } from "react";
import omdbconfig from "./omdbconfig.js";
import Movie from "./Movie.js";
import config from "../config.js";
import up from "../images/up.png";
import down from "../images/down.png";
const axios = require("axios");
const firebase = require("firebase");
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      activeMovie: { Poster: "" },
      searchId: "",
      allList: [],
      newListName: "",
      dropDownListActive: false,
      dropDownImg: down,
      dropDownSearchActive: false,
      dropDownAddListActive: false,
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
  handleSearch = (e) => {
    e.preventDefault();
    const url =
      "https://www.omdbapi.com/?apikey=" + omdbconfig.apiKey + "&i=" + this.state.searchId;
    if (!firebase.app.length) {
      firebase.initializeApp(config);
    }
    let query = firebase
      .database()
      .ref("movies")
      .orderByChild("imdbID")
      .equalTo(this.state.searchId)
      .limitToFirst(1);
    query.once("value", (snap) => {
      if (snap.val() !== null) {
        alert("movie already exist!");
      } else {
        axios.get(url).then((response) => {
          firebase.database().ref("movies").push(response.data);
        });
        alert("add successfully!");
      }
    });
    this.setState({ searchId: "" });
  };
  handleAdd = (e) => {
    e.preventDefault();
    let existingList = this.state.allList.find((x) => x == this.state.newListName);
    if (existingList == null) {
      this.setState({ allList: [...this.state.allList, this.state.newListName] });
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
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    let ref = firebase.database().ref("movies");
    ref.on("value", (snapshot) => {
      const movies = snapshot.val();
      let newState = [];
      for (let movie in movies) {
        newState.push(movies[movie]);
      }
      this.setState({ movies: newState });
    });
  }
  handleDropDownList = (e) => {
    e.preventDefault();
    document.querySelector("#dropdown-list").classList.toggle("is-active");
    if (this.state.dropDownListActive === false) {
      this.setState({ dropDownImg: up });
    } else {
      this.setState({ dropDownImg: down });
    }
    this.setState((state) => ({
      dropDownListActive: !state.dropDownListActive,
    }));
  };
  addStylingDropDownList() {
    if (this.state.dropDownListActive == true) {
      return { display: "flex" };
    } else {
      return { display: "none" };
    }
  }
  handleDropDownSearch = (e) => {
    e.preventDefault();
    document.querySelector("#dropdown-search").classList.toggle("is-active");
    this.setState((state) => ({
      dropDownSearchActive: !state.dropDownSearchActive,
    }));
  };
  addStylingSearch() {
    if (this.state.dropDownSearchActive == true) {
      return { display: "flex", marginLeft: 40 };
    } else {
      return { display: "none" };
    }
  }
  handleDropDownAddList = (e) => {
    e.preventDefault();
    document.querySelector("#dropdown-add-list").classList.toggle("is-active");
    this.setState((state) => ({
      dropDownAddListActive: !state.dropDownAddListActive,
    }));
  };
  addStylingDropDownAddList() {
    if (this.state.dropDownAddListActive == true) {
      return { display: "flex", marginLeft: 40 };
    } else {
      return { display: "none" };
    }
  }
  render() {
    const item = this.state.movies.map((movie) => (
      <Movie key={movie.Poster} movie={movie} onEnlarge={this.handleEnlarge} />
    ));
    return (
      <div className="movie-container">
        <div className="all-dropdowns">
          <div id="dropdown-list" className="dropdown">
            <button className="dropdown-toggle button" onClick={this.handleDropDownList}>
              <span>All </span>
              <img src={this.state.dropDownImg} alt="" />
            </button>
            <div className="dropdown-menu movie-menu" style={this.addStylingDropDownList()}>
              <label className="dropdown-item is-active">All</label>
              {this.state.allList.map((lst) => (
                <label className="dropdown-item">{lst}</label>
              ))}
            </div>
          </div>
          <div id="dropdown-add-list" className="dropdown">
            <button className="dropdown-toggle button" onClick={this.handleDropDownAddList}>
              <span>Add List </span>
            </button>
            <div className="dropdown-menu movie-menu" style={this.addStylingDropDownAddList()}>
              <div className="movie-form-search">
                <form autoComplete="off" className="movie-search-form " onSubmit={this.handleAdd}>
                  <div className="field ">
                    <label htmlFor="newListName" className="field-label ">
                      ADD NEW LIST:
                    </label>
                    <input
                      id="newListName"
                      type="text"
                      name="newListName"
                      placeholder="Enter list name"
                      className="input"
                      value={this.state.newListName}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <button className="button add-movie-button" value="Add">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="dropdown-search" className="dropdown">
            <button className="dropdown-toggle button" onClick={this.handleDropDownSearch}>
              <span>Add Movie</span>
            </button>
            <div className="dropdown-menu movie-menu" style={this.addStylingSearch()}>
              <div className="movie-form-search">
                <form autoComplete="off" className="movie-search-form" onSubmit={this.handleSearch}>
                  <div className="field movie-search-input">
                    <label htmlFor="searchId" className="field-label add-movie-label">
                      ADD MOVIE:
                    </label>
                    <input
                      id="searchId"
                      type="text"
                      name="searchId"
                      placeholder="Enter the movie id"
                      className="input"
                      value={this.state.searchId}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="field">
                    <button className="button add-movie-button" value="Search">
                      Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="movie-grid">{item}</div>
        <div
          className="lightbox-movie-container"
          style={this.addStyling()}
          onClick={this.handleReturn}
        >
          <div className="lightbox-movie ">
            <img className="movie-enlarge-view" src={this.state.activeMovie.Poster} alt="" />
            <div className="movie-intro">
              <h2 className="movie-name">{this.state.activeMovie.Title}</h2>
              <p className=" movie-imdb">
                Imdb Score:{" "}
                {this.state.activeMovie.Poster !== "" && this.state.activeMovie.Ratings[0].Value}
              </p>
              <p className="movie-meta">
                Meta Score:{" "}
                {this.state.activeMovie.Poster !== "" && this.state.activeMovie.Ratings[2].Value}
              </p>
              <p className="movie-description">{this.state.activeMovie.Plot}</p>
              <p className="movie-award">{this.state.activeMovie.Awards}</p>
              <p>
                Directed By{" "}
                <strong className="movie-director">{this.state.activeMovie.Director}</strong>
              </p>
              <p className="movie-time">{this.state.activeMovie.Runtime}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
