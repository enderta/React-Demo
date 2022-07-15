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
  surname:'Dane',

},{
  id:3,
  firstName:'Jack',
  surname:'Dsen',
}]
const [profile, setProfile] = useState(dat)
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState(profile)

const handleSearch = (e) => {
  setSearch(e.target.value)
  /** const results = profile.filter(profile => profile.firstName.toLowerCase().includes(e.target.value.toLowerCase())
  || profile.surname.toLowerCase().includes(e.target.value.toLowerCase()))
  setSearchResults(results) */
}

const handleSubmit = (e) => {
  e.preventDefault()

  setSearchResults(profile.filter(profile => profile.firstName.toLowerCase().includes(search.toLowerCase())||
  profile.surname.toLowerCase().includes(search.toLowerCase())))
}








return (
<>
<input type="text" value={search} onChange={handleSearch}/>
<button onClick={handleSubmit}>Search</button>
{
searchResults.map(profile => {
  return <div>
  <br/>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{profile.firstName}</Card.Title>
        <Card.Text>
          {profile.surname}
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
  </div>
})
}
<br/>
</>
)
}

export default Search2