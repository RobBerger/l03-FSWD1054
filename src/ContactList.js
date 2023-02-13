import React from 'react'
import Contact from './Contact.js'

class ContactList extends React.Component {

  headings() {
    let headings = ["Name", "Email", "Phone Number"]
    return <tr>{headings.map((heading) => <th>{heading}</th>)}</tr>
  }

  contacts() {
    return this.props.contacts.map((contact) => <Contact contact={contact} />)
  }

  render() {
    return (
      <table>
        <thead>{this.headings()}</thead>
        <tbody>{this.contacts()}</tbody>
      </table>
    )
  }
}

export default ContactList