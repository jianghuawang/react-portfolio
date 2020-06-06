import React, { Component } from "react";
import config from "../config.js";
const d3 = require("d3");
const firebase = require("firebase");

export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      nodes: [],
      links: [],
    };
  }
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    var newNodes = [];
    var newLinks = [];
    let ref = firebase.database().ref("graph");
    ref.once("value", snapshot => {
      const result = snapshot.val();
      for (let movie in result) {
        const len = newNodes.length;
        newNodes.push({
          group: "movie",
          id: result[movie].imdbID,
          Poster: result[movie].Poster,
          name: "",
        });
        for (let actor of result[movie].Actors.split(",")) {
          actor = actor.trim();
          const index = newNodes.findIndex(i => i.name === actor);
          if (index !== -1) {
            newLinks.push({
              source: len,
              target: index,
            });
          } else {
            newNodes.push({
              group: "actor",
              name: actor,
              id: "",
              Poster: "",
            });
            newLinks.push({
              source: len,
              target: newNodes.length - 1,
            });
          }
        }
      }
      this.setState({ nodes: newNodes });
      this.setState({ links: newLinks });
      const ele = document.getElementById("mysvg");
      ele.appendChild(this.chart(newNodes, newLinks));
    });
  }
  drag = simulation => {
    function dragStarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    function dragEnded(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    return d3.drag().on("start", dragStarted).on("drag", dragged).on("end", dragEnded);
  };
  chart(nodes, links) {
    console.log(nodes);
    console.log(links);
    const width = 1980;
    const height = 1080;
    const objLinks = links.map(d => Object.create(d));
    const objNodes = nodes.map(d => Object.create(d));
    const svg = d3.create("svg").attr("viewBox", [0, 0, width, height]);
    var defs=svg.append("defs");
    for(let n of nodes){
      if(n.Poster!==""){
        defs.append("pattern")
          .attr("id",n.id)
          .attr("height","100%")
          .attr("width","100%")
          .attr("patternConetentUnits","objectBoundingBox")
          .append("image")
          .attr("height",200)
          .attr("width",200)
          .attr("preserveAspectRatio","none")
          .attr("xlink:href",n.Poster)
      }
    }
    const link = svg
      .append("g")
      .attr("stroke", "#000")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(objLinks)
      .join("line")
      .attr("stroke-width", 2);
    
    const radius = node => {
      if (node.id !== "") return 80;
      else return 20;
    };
    const color = node => {
      if (node.Poster === "") {
        return "#4285F4"
      } else {
        return "url(#"+node.id+")";
      }
    };
    let tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("color","red")
      .style("visibility", "hidden")
      .text("");
    const simulation = d3
      .forceSimulation(objNodes)
      .force(
        "link",
        d3
          .forceLink()
          .links(links)
          .id(d => {
            return d.index;
          })
          .distance(200)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));
    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(objNodes)
      .join("circle")
      .attr("r", radius)
      .style("fill", color)
      .call(this.drag(simulation))
      .on("mouseover", d => {
        if (d.name !== "") {
          tooltip.text(d.name);
          return tooltip.style("visibility", "visible");
        }
      })
      .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function () {
        return tooltip.style("visibility", "hidden");
      });
    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
      node.attr("cx", d => d.x).attr("cy", d => d.y);
    });
    return svg.node();
  }
  render() {
    return <div id="mysvg"></div>;
  }
}
