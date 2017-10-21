import { connect } from 'react-redux';
import React, { Component } from 'react';
import { previewItem } from '../actions/actions';

class Login extends Component {
  renderList() {
    const a = this.props;
    console.log(a);
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
    dispatch(previewItem(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
