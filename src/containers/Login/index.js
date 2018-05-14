import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";

import { login } from "./actions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState(prevState => ({
      [name]: value
    }));
  };

  render() {
    const { handleLogin } = this.props;

    return (
      <Fragment>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={event => this.handleChange(event)}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={event => this.handleChange(event)}
        />
        <Button
          color="primary"
          onClick={() => {
            handleLogin(this.state);
          }}
        >
          Login
        </Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleLogin: data => dispatch(login(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
