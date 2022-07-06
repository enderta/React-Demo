import React from 'react'
import './searc.css'

const Search = () => {
    const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Doe', age: 25 },
        { id: 3, name: 'Joe Doe', age: 27 },
        { id: 4, name: 'Jack Doe', age: 28 },
    ]
    const [search, setSearch] = React.useState('')
    const [filteredData, setFilteredData] = React.useState(data)


  return (
    <div className='container'>
      <input className='input' type="text" value={search} onChange={e => setSearch(e.target.value)} />
      {
        data.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => (
            <div key={item.id}>
                <p> {item.name} </p>
            </div>
        ))

      }



    </div>
  )
}

export default Search