import React, { Component } from 'react';
import ConversationList from './ConversationList/Conversation List';

class MainScreen extends Component {
  render() {
    return (
      <div className="MainScreen">
        <div className="convoSelector">
          <ConversationList />
        </div>
        <div className="chat" />
      </div>
    );
  }
}

export default MainScreen;
