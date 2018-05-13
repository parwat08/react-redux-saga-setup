import React, { Component, Fragment } from "react";

class Login extends Component {
  state = {
    component: "login"
  };

  render() {
    const login = () => {
      console.log("----", this.state);
    };

    return (
      <Fragment>
        <input
          type="text"
          name="username"
          value={this.state.username}
          id="username"
          placeholder="Username"
          autoComplete="off"
          autoFocus
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          id="password"
          placeholder="Password"
          autoComplete="off"
        />
        <button onClick={login}>Login</button>
      </Fragment>
    );
  }
}

export default Login;
