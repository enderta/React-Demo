import React from 'react'
import {useState} from 'react'
import {Card} from 'react-bootstrap'

const Search2 = () => {const dat=[{
  id:1,
  firstName:'John',
  surname:'Doe',

},{
  id:2,
  firstName:'Jane',
  surname:'Doe',

},{
  id:3,
  firstName:'Jack',
  surname:'Doe',
}]
const [profile, setProfile] = useState(dat)
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState(dat)

const handleSearch = (e) => {
  setSearch(e.target.value)
}
const handleSearchResults = (e) => {
  setSearchResults(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  setSearchResults(profile.filter(profile => profile.firstName.toLowerCase().includes(search.toLowerCase())))
}








return (
<>
<input type="text" onChange={handleSearch}/>
<button onClick={handleSubmit}>Search</button>
{
searchResults.map(profile => {
  return <div>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{profile.firstName}</Card.Title>
        <Card.Text>
          {profile.surname}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
})
}
<br/>
</>
)
}

export default Search2