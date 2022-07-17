import React from 'react'
import {Card,Table} from 'react-bootstrap'

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
      <div className='container'>
      <Table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
              <td>
              <button onClick={() => handleProfile(item.id)}>Profile</button>
              {
                    item.id === id ? <><br/>

                    {profile.address.street}<br/>
                    {profile.address.city}
                    <br/>
                    {profile.address.zipcode}</>: null

                  }

                
             </td>
            </tr>
          ))}
        </tbody>

      </Table>

</div>


    </div>
  )
}

export default App