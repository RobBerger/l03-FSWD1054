import React from 'react';
import contacts from './Contacts.js'
import Contact from './Contact.js'

function App() {
  let contactList = contacts.map((contact, index) => {
    return (<Contact contact={contact} />)
  })
}


export default App;