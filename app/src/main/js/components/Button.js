import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <div className="Button">
        <button onClick={this.props.clickFunction}> Login</button>
      </div>
    );
  }
}

export default Button;
