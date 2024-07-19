import React, { Component } from "react";
import "./loginForm.css";
class LoginForm extends Component {
  username = React.createRef();

  state = {
    account: {
      username: "",
      password: "",
    },
  };
  componentDidMount() {
    this.username.current.focus();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("submitted");
  };

  handleChange = (e) => {
    e.preventDefault();
    let account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account });
    console.log(account.username);
  };
  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              ref={this.username}
              type="email"
              id="username"
              placeholder="example@gamil.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              type="password"
              id="password"
              placeholder="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
