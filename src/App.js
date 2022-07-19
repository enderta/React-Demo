import React from 'react'
import { Table } from 'react-bootstrap'

const App = () => {
  const [data, setData] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState(data)
  

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFilteredData(data.filter(item => item.firstName.toLowerCase().includes(search.toLowerCase())))
  }

  React.useEffect(() => {
    
  }, [])
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaW5vLndpbnRoZWlzZXIiLCJhdXRoIjoiUk9MRV9FTVBMT1lFRSIsImV4cCI6MTY1ODIzNjMyMX0.fx3ydSIrFh25-CDG_1BnIWUGKy5r-oUJZU8kIXyhKSVn7p5EfB_TMs9ef2ASzgnkwe1q6shAd9iHT_sPJTerRQ");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
 "Access-Control-Allow-Origin":  "*",
"Access-Control-Allow-Methods": "POST GET PUT DELETE",
"Access-Control-Allow-Headers": "Content-Type, Authorization"
};

fetch("https://www.gmibank.com/api/tp-customers", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  return (
    <div>
      <input type="text" value={search} onChange={handleSearch} />
      <button type="submit" onClick={handleSubmit}>Search</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>country</th>
            </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.country.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>


    </div>
  )
}

export default App