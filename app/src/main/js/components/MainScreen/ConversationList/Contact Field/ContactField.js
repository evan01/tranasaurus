import React, { Component } from 'react';
import ContactPicture from './ContactPicture';
import ContactSummary from './ContactSummary';

// todo implement layout components later on
// todo be able to pass an image to this component
class ContactField extends Component {
  render() {
    return (
      <div className='ContactField'>
        <div className='HorizontalDistributeContainer'>
          <ContactPicture image={this.props.image} />
          <ContactSummary />
        </div>
      </div>
    );
  }
}


export default ContactField;
