import React from 'react';
import contacts from './Contacts.js'
import Contact from './Contact.js'

function App() {
  let contactList = contacts.map((contact, index) => {
    return (<Contact contact={contact}/>)
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contactList}
        </tbody>
      </table>
      <div>
        {contacts.length ?
          <p>Total Number of Contacts: <span>{contacts.length}</span></p> :
          <p>Sorry, no contacts found :(</p> }
      </div>
    </div>
  )
}

export default App;