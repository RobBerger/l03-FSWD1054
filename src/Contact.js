function Contact(props) {
    return (
      <tr>
        <td>{props.contact.first_name} {props.contact.last_name}</td>
        <td><a href={`mailto:${props.contact.email}`}>{props.contact.email}</a></td>
        <td>{props.contact.phone}</td>
      </tr>
    )
  }
  
  export default Contact