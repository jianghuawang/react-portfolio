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
      activeList:[],
      addId:"",
      searchName: "",
      allList: [],
      newListName: "",
      currList:"All",
      dropDownListActive: false,
      dropDownImg: down,
      dropDownSearchActive: false,
      dropDownAddListActive: false,
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEnlarge = movie => {
    this.setState({ activeMovie: movie });
    var ref=firebase.database().ref("moviepairs").orderByChild("imdbID").equalTo(movie.imdbID);
    var newState=[]
    ref.once("value",snapshot=>{
      var result=snapshot.val();
      for(let id in result){
        newState.push(result[id].listName)
      }
      var newOne=[]
      for(let list of this.state.allList){
        if(newState.includes(list)==false){
          newOne.push(list)
        }
      }
      this.setState({activeList:newOne})
    })
    document.body.classList.add("disable-scrolling");
  };
  handleReturn = e => {
    var frame = document.querySelector(".lightbox-movie-container");
    if (e.target === frame) {
      this.setState({ activeMovie: { Poster: "" } });
      this.setState({activeList:[]});
      document.body.classList.remove("disable-scrolling");
    }
  };
  handleAddMovie = e => {
    e.preventDefault();
    const url = "https://www.omdbapi.com/?apikey=" + omdbconfig.apiKey + "&i=" + this.state.addId;
    let query = firebase.database().ref("movies").child(this.state.addId);
    query.once("value", snap => {
      if (snap.val() !== null) {
        alert("movie already exist!");
      } else {
        axios.get(url).then(response => {
          firebase.database().ref("movies").child(response.data.imdbID).set(response.data);
        });
        alert("add successfully!");
      }
    });
    this.setState({ addId: "" });
  };
  handleAddList = e => {
    e.preventDefault();
    let query = firebase.database().ref("lists").orderByChild("name").equalTo(this.state.newListName).limitToFirst(1);
    query.once("value", snap => {
      if (snap.val() !== null) {
        alert("list already exist!");
      } else {
        firebase.database().ref("lists").push({ name: this.state.newListName });
        alert("add successfully!");
      }
    });
    this.setState({ newListName: "" });
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
    ref.on("value", snapshot => {
      const movies = snapshot.val();
      let newState = [];
      for (let movie in movies) {
        newState.push(movies[movie]);
      }
      this.setState({ movies: newState });
    });
    let refL = firebase.database().ref("lists");
    refL.on("value", snapshot => {
      const lists = snapshot.val();
      let newState = [];
      for (let list in lists) {
        newState.push(lists[list].name);
      }
      this.setState({ allList: newState });
    });
  }
  handleDropDownList = e => {
    e.preventDefault();
    document.querySelector("#dropdown-list").classList.toggle("is-active");
    if (this.state.dropDownListActive === false) {
      this.setState({ dropDownImg: up });
    } else {
      this.setState({ dropDownImg: down });
    }
    this.setState(state => ({
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
  handleDropDownSearch = e => {
    e.preventDefault();
    document.querySelector("#dropdown-search").classList.toggle("is-active");
    this.setState(state => ({
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
  handleDropDownAddList = e => {
    e.preventDefault();
    document.querySelector("#dropdown-add-list").classList.toggle("is-active");
    this.setState(state => ({
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
  handleDelete=(e)=>{
    e.preventDefault();
    firebase.database().ref("movies").child(this.state.activeMovie.imdbID).remove();
    var ref=firebase.database().ref("moviepairs").orderByChild("imdbID").equalTo(this.state.activeMovie.imdbID);
    ref.once("value",snapshot=>{
      var result=snapshot.val();
      for(var index in result){
        firebase.database().ref("moviepairs").child(index).remove();
      }
    })
    this.setState({ activeMovie: { Poster: "" } });
    this.handleShow("all");
    document.body.classList.remove("disable-scrolling");
  }
  handleShow=(listName)=>{
    console.log(listName)
    if(listName=="all"){
      this.setState({currList:"All"});
      let ref = firebase.database().ref("movies");
      ref.on("value", snapshot => {
        const movies = snapshot.val();
        let newState = [];
        for (let movie in movies) {
          newState.push(movies[movie]);
        }
        this.setState({ movies: newState });
    });
    }
    else{
      this.setState({currList:listName});
      let ref=firebase.database().ref("moviepairs").orderByChild("listName").equalTo(listName);
      let newState=[]
      ref.once("value",snapshot=>{
        var pairs=snapshot.val();
        for(let id in pairs){
          const imdbID=pairs[id].imdbID;
          firebase.database().ref("movies").child(imdbID).on("value",snapshot=>(newState.push(snapshot.val())));
        }
        this.setState({movies:newState});
      })
    }
  }
  handleSearch=(e)=>{
    e.preventDefault();
    let newState=[]
    firebase.database().ref("movies").orderByChild("Title").equalTo(this.state.searchName).once("value",snapshot=>{
      var result=snapshot.val();
      for(let movie in result){
        newState.push(result[movie]);
      }
      this.setState({movies:newState})
    })
  }
  handleCreatePair=(id,value,target)=>{
    firebase.database().ref("moviepairs").push({
      imdbID:id,
      listName:value
    });
    target.value="";
    this.setState({activeMovie:{Poster:""}});
    document.body.classList.remove("disable-scrolling");
  }
  render() {
    const item = this.state.movies.map(movie => <Movie key={movie.Poster} movie={movie} onEnlarge={this.handleEnlarge} />);
    return (
      <div className="movie-container">
        <div className="all-dropdowns">
          <div id="dropdown-list" className="dropdown">
            <button className="dropdown-toggle button" onClick={this.handleDropDownList}>
              <span>{this.state.currList}</span>
              <img src={this.state.dropDownImg} alt="" />
            </button>
            <div className="dropdown-menu movie-menu" style={this.addStylingDropDownList()}>
              <label className="dropdown-item drop-down-list" onClick={()=>(this.handleShow("all"))}>All</label>
              {this.state.allList.map(lst => (
                <label key={lst} className="dropdown-item drop-down-list" onClick={()=>(this.handleShow(lst))}>{lst}</label>
              ))}
            </div>
          </div>
          <div id="dropdown-add-list" className="dropdown">
            <button style={{backgroundColor:"#739DDD",color:"white"}}className="dropdown-toggle button" onClick={this.handleDropDownAddList}>
              <span>Add List </span>
            </button>
            <div className="dropdown-menu movie-menu" style={this.addStylingDropDownAddList()}>
              <div className="movie-form-add">
                <form autoComplete="off" className="movie-add-form" onSubmit={this.handleAddList}>
                  <div className="field ">
                    <label htmlFor="newListName" className="field-label ">
                      ADD NEW LIST:
                    </label>
                    <input id="newListName" type="text" name="newListName" placeholder="Enter list name" className="input" value={this.state.newListName} onChange={this.onChange} required />
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
            <button style={{backgroundColor:"#FB6F6F",color:"white"}}className="dropdown-toggle button" onClick={this.handleDropDownSearch}>
              <span>Add Movie</span>
            </button>
            <div className="dropdown-menu movie-menu" style={this.addStylingSearch()}>
              <div className="movie-form-add">
                <form autoComplete="off" className="movie-add-form" onSubmit={this.handleAddMovie}>
                  <div className="field movie-add-input">
                    <label htmlFor="addId" className="field-label add-movie-label">
                      ADD MOVIE:
                    </label>
                    <input id="addId" type="text" name="addId" placeholder="Enter the movie id" className="input" value={this.state.addId} onChange={this.onChange} required />
                  </div>
                  <div className="field">
                    <button className="button add-movie-button" value="Search">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="movie-search-bar">
              <input type="text" className="input movie-search-input" value={this.state.searchName} onChange={this.onChange} name="searchName" required placeholder="search"/>
              <div>
                <button className="button" onClick={this.handleSearch}>
                  Search
                </button>
              </div>
          </div>
        </div>
        <div className="movie-grid">{item}</div>
        <div className="lightbox-movie-container" style={this.addStyling()} onClick={this.handleReturn}>
          <div className="lightbox-movie ">
            <img className="movie-enlarge-view" src={this.state.activeMovie.Poster} alt="" />
            <div className="movie-intro">
              <h2 className="movie-name">{this.state.activeMovie.Title}</h2>
              <p className=" movie-imdb">Imdb Score: {this.state.activeMovie.Poster !== "" && this.state.activeMovie.Ratings[0].Value}</p>
              <p className="movie-meta">Meta Score: {this.state.activeMovie.Poster !== "" && this.state.activeMovie.Ratings[2].Value}</p>
              <p className="movie-description">{this.state.activeMovie.Plot}</p>
              <p className="movie-award">{this.state.activeMovie.Awards}</p>
              <p>
                Directed By <strong className="movie-director">{this.state.activeMovie.Director}</strong>
              </p>
              <p className="movie-time">{this.state.activeMovie.Runtime}</p>
              <div className="movie-operation">
                <div>
                  <select style={{ height: "39.176px", backgroundColor: "#6E7FE4", color: "white" }} className="label" name="newlist" id="newlist" onChange={(e)=>(this.handleCreatePair(this.state.activeMovie.imdbID,e.target.value,e.target))}>
                    <option value="" disabled selected>
                      Add to list:
                    </option>
                    {this.state.activeList.map(lst=>(<option value={lst}>{lst}</option>))}
                  </select>
                </div>
                <div>
                  <button style={{ backgroundColor: "#FF5E5A", color: "white" }} className="button" onClick={this.handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
