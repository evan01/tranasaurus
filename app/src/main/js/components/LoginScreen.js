import React, { Component } from 'react';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginPressed(this.state);
  }

  render() {
    return (
      <div>
        <h1 className="title">Welcome to Tranasaurus!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              name="email"
            />
            Password:
            <input
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginScreen;
