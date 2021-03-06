import React, { Component } from "react";
import Home from "./Home.js";
import Images from "./Images.js";
import Videos from "./Videos.js";
import Projects from "./Projects.js";
import GuestBook from "./GuestBook.js";
import Movies from "./Movies.js";
import Graph from "./Graph.js";
export default class Body extends Component {
  displayContent = () => {
    var activeTab = this.props.activeTab;
    if (activeTab === 1) return <Home />;
    else if (activeTab === 2) return <Images />;
    else if (activeTab === 3) return <Videos />;
    else if (activeTab === 4) return <Projects />;
    else if (activeTab === 5) return <GuestBook />;
    else if (activeTab === 6) return <Movies />;
    else return <Graph />;
  };
  render() {
    return this.displayContent();
  }
}
