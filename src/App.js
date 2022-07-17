import React from 'react'
import {Card, Carousel} from 'react-bootstrap'

const App = () => {
  
  const [data, setData] = React.useState([])
  const [search, setSearch] = React.useState('')
  const [filteredData, setFilteredData] = React.useState(data)

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


  
      
    
    return (
    <div>
      <input className='input' type="text" value={search} onChange={handleSearch} />
      <button onClick={handleSubmit}>Search</button>
      {
        filteredData.map(item => (
          <Carousel>
            <Carousel.Item>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>

          </Carousel>
        ))
        
      }




    </div>
  )
}

export default App