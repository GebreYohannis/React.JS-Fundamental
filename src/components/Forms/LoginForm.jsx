import React, { Component } from "react";
import "./loginForm.css";
import Input from "./Input";
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
    console.log(`Username = ${this.state.account.username}`);
    console.log(`Password = ${this.state.account.password}`);
    console.log("submitted");
  };

  handleChange = (e) => {
    e.preventDefault();
    let account = { ...this.state.account };
    // account.username = e.currentTarget.value;
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
    console.log(account.username);
  };
  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            onChange={this.handleChange}
            label="Username"
            name="username"
            type="email"
            refs={this.username}
            placeholder="example@gmail.com"
          />

          <Input
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
