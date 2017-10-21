import React, { Component } from 'react';

class RoundedInput extends Component {
  componentWillMount() {
    // this.updateInputValue.bind(this);
  }

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
        <input value={this.state.inputValue} onChange={updateInputValue}>RoundedInput</input>
      </div>
    );
  }
}

export default RoundedInput;
