import React, { Component } from 'react';

class RoundedInput extends React.C {
  getInitialState() {
    return ({
      inputValue: '',
    });
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div className="RoundedInput">
        <input value={this.state.inputValue} onChange={this.updateInputValue}>RoundedInput</input>
      </div>
    );
  }
}

export default RoundedInput;
