import React from 'react'
import {Card,Table} from 'react-bootstrap'

const SearchProfile = () => {
  
  const [data, setData] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState(data)
  const [isLoading, setIsLoading] = React.useState(false)
  const [showProfile, setShowProfile] = React.useState(false)
  const [profile, setProfile] = React.useState(data)

 

  React.useEffect(() => {
    const handleLoadData = async () => {
      setIsLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      setData(json)
      setFilteredData(json)
      setIsLoading(false)
    }
    handleLoadData()
  }, [])

    
  



  const handleSearch = (e) => {
    setSearch(e.target.value)
   // setFilteredData(data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFilteredData(data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  }



  const handleCloseProfile = () => {
    setShowProfile(false)
  }

  const handleShowProfileById = (id) => {
    setProfile(data.filter(item => item.id === id))
    setShowProfile(true)
  }



    
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={handleSearch} />
          <button type="submit">Search</button>
        </form>
        {isLoading ? <h1>Loading...</h1> : (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Profile</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <button onClick={() => handleShowProfileById(item.id)}>Show Profile</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {showProfile && (
              <Card>
                <Card.Header>Profile</Card.Header>
                <Card.Body>
                  <Card.Title>{profile[0].name}</Card.Title>
                  <Card.Text>
                    <p>{profile[0].email}</p>
                    <p>{profile[0].phone}</p>
                    <p>{profile[0].website}</p>
                    
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <button onClick={handleCloseProfile}>Close</button>
                </Card.Footer>
              </Card>
            )}
            </div>
        )}

      </div>
    )
}

export default SearchProfile