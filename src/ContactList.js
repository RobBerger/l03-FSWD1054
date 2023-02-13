import React from 'react'
import Contact from './Contact.js'
import styles from './ContactList.module.css'

class ContactList extends React.Component {

  headings() {
    let headings = ["Name", "Email", "Phone Number"]
    return <tr className={styles.heading}>{headings.map((heading) => <th>{heading}</th>)}</tr>
  }

  contacts() {
    return this.props.contacts.map((contact) => <Contact contact={contact} />)
  }

  render() {
    return (
      <table className={styles.contactList}>
        <thead>{this.headings()}</thead>
        <tbody>{this.contacts()}</tbody>
      </table>
    )
  }
}

export default ContactList