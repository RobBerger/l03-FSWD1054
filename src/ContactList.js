import React from 'react'
import Contact from './Contact.js'
import styles from './ContactList.module.css'
import Table from 'react-bootstrap/Table'

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
      <Table>
        <thead>{this.headings()}</thead>
        <tbody>{this.contacts()}</tbody>
      </Table>
    )
  }
}

export default ContactList