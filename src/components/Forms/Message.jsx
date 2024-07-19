import React, { Component } from "react";
import "./Message.css";
class Message extends Component {
  state = {
    post: {
      username: "",
      comment: "",
    },
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    return (
      <div className="message-container">
        <legend>Message</legend>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="comment">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea name="comment" id="comment"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Message;
