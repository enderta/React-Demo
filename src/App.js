import React from 'react'
import { Form, FormControl, Table } from 'react-bootstrap'

const App = () => {
  const contacts = [{
    'id': 1,
    'name': 'John Doe',
    'phone': '555-555-5555',

  }, {
    'id': 2,
    'name': 'Jane Doe',
    'phone': '555-555-5555',
  }
  ]
  const [search, setSearch] = React.useState('')
  return (

    <div>
     <Form >
      <FormControl type="text" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} />
     </Form>
     <Table striped bordered hover>
     <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
      </tr>
      </thead>
      <tbody>
      {
        contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase())).map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
          </tr>
        ))

      }
      </tbody>
    </Table>
    </div>
  )
}

export default App