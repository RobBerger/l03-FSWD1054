import React from 'react';
import contacts from './Contacts.js'
import ContactList from './ContactList.js'
import ContactSummary from './ContactSummary.js'

function App() {
  return (
    <div>
      <ContactList contacts={contacts} />
      <ContactSummary contacts={contacts} />
    </div>
  )
}

export default App;