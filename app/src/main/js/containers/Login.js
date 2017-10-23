import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loginFail, loginSuccess } from '../actions/actions';
import LoginScreen from '../components/LoginScreen';

class Login extends Component {
  login(details) {
    console.log('clicked, attempting to log in');
    console.log(details);

    //  Actually try to log in using the facebook api

    // Dispatch an action depending whether or not you've logged in.


    // for now just log in and navigate to the main screen

    this.props.history.push('/main');
  }

  render() {
    return (
      <div className="list_items">
        <LoginScreen loginPressed={this.login} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listItems: state.list.items,
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  previewItem: (name) => {
    dispatch(loginSuccess(name));
    dispatch(loginFail(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
