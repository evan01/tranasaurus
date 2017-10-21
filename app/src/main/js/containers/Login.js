import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loginFail, loginSuccess } from '../actions/actions';


class Login extends Component {
  renderList() {
    return (
      <h1>SUp</h1>
    );
  }
  render() {
    return (
      <div className="list_items">
        <ul>
          { this.renderList() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listItems: state.list.items,
});

const mapDispatchToProps = dispatch => ({
  previewItem: (name) => {
    dispatch(loginSuccess(name));
    dispatch(loginFail(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
