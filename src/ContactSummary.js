import React from 'react'

class ContactSummary extends React.Component {
  render() {
    return (
    <div>
     { this.props.contacts.length ?
       <p>Total Number of Contacts: <span>{this.props.contacts.length}</span></p> :
       <p>Sorry, no contacts found :(</p> }
    </div>)
  }
}

export default ContactSummary