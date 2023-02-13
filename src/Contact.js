import React from 'react';

function Contact(props) {
  let { contact: { first_name, last_name, email, phone } } = props
  return (
    <tr>
      <td>{first_name} {last_name}</td>
      <td><a href={`mailto:${email}`}>{email}</a></td>
      <td>{phone}</td>
    </tr>
  )
}
  
  export default Contact