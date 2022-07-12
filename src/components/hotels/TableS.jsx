import React from 'react'
import { useEffect,useState } from 'react'
import { Button, Form,FormControl, Table } from 'react-bootstrap'

const TableS = () => {
const data = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        id: 2,
        firstName: 'Jane',
        lastName: 'Doe',
    },
    {
        id: 3,
        firstName: 'Ben',
        lastName: 'Doe',
    }]
    
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState(data)

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const results = data.filter(info => info.firstName.toLowerCase().includes(e.target.value.toLowerCase())
        || info.lastName.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchResults(results)

    }

    

  return (
    <div>
        <Form className='d-flex'>
            <FormControl type='text' placeholder='Search' value={search} onChange={handleSearch} />
            </Form>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
            </thead>
            <tbody>
                {searchResults.map(info => (
                    <tr key={info.id}>
                        <td>{info.firstName}</td>
                        <td>{info.lastName}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

    </div>
  )
}

export default TableS