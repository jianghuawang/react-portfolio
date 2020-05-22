import React, { Component } from "react";
import config from "../config.js";
import Select from "react-select";
import Message from "./Message.js";
const firebase = require("firebase");

export default class GuestBook extends Component {
  constructor() {
    super();
    this.state = {
      shouldUpdate: true,
      messages: [],
      name: "",
      description: "",
      comment: "",
      email: "",
    };
    this.onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    this.handleValidation = () => {
      if (this.state.description.length > 100) {
        alert("description must be less than 100 characters");
        return false;
      } else if (
        (this.state.comment.length < 15) |
        (this.state.comment.length > 500)
      ) {
        alert("comment must be larger than 15 but less than 500 characters");
        return false;
      } else {
        return true;
      }
    };
    this.firebasePush = (e) => {
      e.preventDefault();
      if (!firebase.app.length) {
        firebase.initializeApp(config);
      }
      let time = Date().toString();
      if (this.handleValidation() === false) {
        return;
      }
      firebase
        .database()
        .ref("messages")
        .push({
          name: this.state.name,
          description: this.state.description,
          comment: this.state.comment,
          visibility: document.querySelector("#visibility").value,
          email: this.state.email,
          time: Date().toLocaleString(),
        });
      this.setState({
        name: "",
        description: "",
        comment: "",
        email: "",
      });
      alert("thank you for your comment, enjoy your day!");
      this.setState((state) => ({
        shouldUpdate: !state.shouldUpdate,
      }));
    };
  }
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    let ref = firebase.database().ref("messages");
    ref.on("value", (snapshot) => {
      const messages = snapshot.val();
      let newState = [];
      for (let message in messages) {
        newState.push({
          id: message,
          name: messages[message].name,
          description: messages[message].description,
          comment: messages[message].comment,
          visibility: messages[message].visibility,
          email: messages[message].email,
          time: messages[message].time,
        });
      }
      this.setState({ messages: newState });
    });
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.shouldUpdate !== prevState.shouldUpdate) {
      let ref = firebase.database().ref("messages");
      ref.on("value", (snapshot) => {
        const messages = snapshot.val();
        let newState = [];
        for (let message in messages) {
          newState.push({
            id: message,
            name: messages[message].name,
            description: messages[message].description,
            comment: messages[message].comment,
            visibility: messages[message].visibility,
            email: messages[message].email,
          });
        }
        this.setState({ messages: newState });
      });
    }
  }
  render() {
    const item = this.state.messages.map((message) => (
      <Message key={message.id} message={message} />
    ));
    return (
      <div className="guestbookContainer">
        <div className="formgrid">
          <form
            autoComplete="off"
            className="form formForGuest"
            onSubmit={this.firebasePush}
          >
            <div className="field">
              <label htmlFor="name" className="field-label">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="input"
                name="name"
                placeholder="Enter your name"
                pattern=".{5,19}"
                title="larger than 5 and less than 20 characters"
                value={this.state.name}
                onChange={this.onChange}
                required
              ></input>
            </div>
            <div className="field">
              <label htmlFor="description" className="field-label">
                Description of Yourself:
              </label>
              <textarea
                name="description"
                id="description"
                rows="3"
                className="textarea"
                placeholder="optional"
                value={this.state.description}
                onChange={this.onChange}
              ></textarea>
            </div>
            <div className="field">
              <label htmlFor="comment" className="field-label">
                Comment:
              </label>
              <textarea
                name="comment"
                id="comment"
                rows="5"
                className="textarea"
                placeholder="Leave your comment"
                value={this.state.comment}
                onChange={this.onChange}
                required
              ></textarea>
            </div>
            <div className="field select-custom">
              <label className="field-label" htmlFor="visibility">
                Visibility to others:
              </label>
              <select
                className="label"
                name="visibility"
                id="visibility"
                onChange={this.onChange}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="email" className="field-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input"
                value={this.state.email}
                onChange={this.onChange}
              ></input>
            </div>
            <div className="field">
              <button value="Submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="commentHistory">
          <div className="label allComments">
            <h3>Comment History</h3>
            <div className="comment-content">{item}</div>
          </div>
        </div>
      </div>
    );
  }
}
