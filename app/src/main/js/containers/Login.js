import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loginFail, loginSuccess } from '../actions/actions';


class Login extends Component {
  render() {
    return (
      <div className="list_items">
        <h1 className="title">Welcome to Tranasaurus!</h1>
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
