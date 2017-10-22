import { connect } from 'react-redux';
import React, { Component } from 'react';
import { loginFail, loginSuccess } from '../actions/actions';
import MainScreen from '../components/MainScreen';

class Main extends Component {
  render() {
    return (
      <div className="list_items">
        <MainScreen />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  previewItem: (name) => {
    dispatch(loginSuccess(name));
    dispatch(loginFail(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
