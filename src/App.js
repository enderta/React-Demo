import React from 'react'
import {Card} from 'react-bootstrap'

const App = () => {
  
  const [data, setData] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState(data)
  const [profile, setProfile] = React.useState({})
  const [id, setId] = React.useState('')

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((result) => {
      setData(result)
      setFilteredData(result)
    }
    )
  }, [])



  const handleSearch = (e) => {
    setSearch(e.target.value)
   // setFilteredData(data.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFilteredData(data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())))
  }

  const handleProfile = (id) => {
    setId(id)
    setProfile(data.find(item => item.id === id))
  }

  


  
      
    
    return (
    <div>
      <input className='input' type="text" value={search} onChange={handleSearch} />
      <button onClick={handleSubmit}>Search</button>
      {
        filteredData.map(item => (
          
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.email}
                  </Card.Text>
                  <button onClick={() => handleProfile(item.id)}>Profile</button>
                  {
                    item.id === id ? <Card.Text>{profile.address.street}<br/>
                    {profile.address.city}
                    <br/>
                    {profile.address.zipcode}</Card.Text> : null

                  }

                </Card.Body>
              </Card>
            
        ))
        
      }




    </div>
  )
}

export default App