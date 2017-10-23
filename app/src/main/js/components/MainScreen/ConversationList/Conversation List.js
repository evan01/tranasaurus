import React, { Component } from 'react';
import ContactField from './Contact Field/ContactField';


// todo render a table of contact Fields, to select
class ConversationList extends Component {
  render() {
    return (
      <div className='ConversationList'>
        <h1>List</h1>
        <ContactField />
      </div>
    );
  }
}

export default ConversationList;
