import React, { Component } from "react";
import ant from "../images/antvsbee-mainpage.png";
import Berkeleymap from "../images/map.png";
export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/jianghuawang/AntVS.Bees">
              <img className="modal-custom" src={ant} alt="" />
            </a>
          </div>
          <div className="project-description">
            <h4>Ants VS. Bees</h4>
          </div>
        </div>
        <div className="project">
          <div className="project-img">
            <a href="https://github.com/jianghuawang/Yelpmap">
              <img className="modal-custom" src={Berkeleymap} alt="" />
            </a>
          </div>
          <div className="project-description">
            <h4>Yelp Map</h4>
          </div>
        </div>
      </div>
    );
  }
}
