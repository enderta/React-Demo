import React from 'react'
import {useState, useEffect} from 'react'
import { Button, Form,FormControl, Table } from 'react-bootstrap'

const Search = () => {
    const [bookings, setBookings] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState(bookings)
    const [profile, setProfile] = useState([])
    const [id, setId] = useState('')



    useEffect(() => {
        getBookings()
    }
        , [])

    const getBookings = async () => {
        const response = await fetch('https://cyf-react.glitch.me')
        const data = await response.json()
        setBookings(data)
        setSearchResults(data)
    }

    const handleSearch = (e) => {
        setSearch(e.target.value)
        const results = bookings.filter(booking => booking.firstName.toLowerCase().includes(e.target.value.toLowerCase())
        || booking.surname.toLowerCase().includes(e.target.value.toLowerCase()))
        setSearchResults(results)

       
    }

    useEffect(() => {
        fetch('https://cyf-react.glitch.me')
        .then(res => res.json())
        .then(data => setProfile(data))
    }
        , [id])



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
                    <th>profile</th>
                </tr>
            </thead>
            <tbody>
                {searchResults.map(booking => (
                    <tr key={booking.id}>
                        <td>{booking.firstName}</td>
                        <td>{booking.surname}</td>
                        <td>
                            <Button onClick={() => setId(booking.id)}>View Profile</Button>
                            {
                                id === booking.id ?
                                <div>
                                    <h1>{booking.firstName}</h1>
                                    <h1>{booking.surname}</h1>
                                    <h1>{booking.email}</h1>
                                    <h1>{booking.phone}</h1>
                                    </div>
                                : null

                            }


                        </td>
                        
                     </tr>
                ))}
            </tbody>
        </Table>
        

    </div>
  )
}

export default Search