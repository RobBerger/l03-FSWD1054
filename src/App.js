import React from 'react';
import contacts from './Contacts.js'
import ContactList from './ContactList.js'

function App() {
  return (
    <div>
      <ContactList contacts={contacts} />
      <div>
        { this.props.contacts.length ?
          <p>Total Number of Contacts: <span>{this.props.contacts.length}</span></p> :
          <p>Sorry, no contacts found :(</p> }
      </div>)
    </div>
  )
}

export default App;