import React, { Component } from "react";
import TabList from "./components/TabList.js";
import Body from "./components/Body.js";
import ButtonToTop from "./components/ButtonToTop.js";
import "./App.css";
import config from "./config.js";
const firebase = require("firebase");
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
      showBtn: false,
    };
    this.changeTab = (id) => {
      this.setState({
        activeTab: id,
      });
    };
  }
  handleOverScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 100) {
      this.setState({ showBtn: true });
    } else {
      this.setState({ showBtn: false });
    }
  };
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    window.addEventListener("scroll", this.handleOverScroll);
  }
  render() {
    const tabs = [
      {
        id: 1,
        title: "Home",
      },
      {
        id: 2,
        title: "Images",
      },
      {
        id: 3,
        title: "Videos",
      },
      {
        id: 4,
        title: "Projects",
      },
      {
        id: 5,
        title: "Guest Book",
      },
      {
        id: 6,
        title: "Movies",
      },
    ];
    return (
      <div className="body">
        <div className="container">
          <div className="navbar">
            <TabList tabs={tabs} changeTab={this.changeTab} activeTab={this.state.activeTab} />
          </div>
          <div className="main-body">
            <Body activeTab={this.state.activeTab} />
            <ButtonToTop showBtn={this.state.showBtn} />
          </div>
        </div>
      </div>
    );
  }
}
