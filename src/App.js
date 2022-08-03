import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)

  
  
  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=3')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  console.log(users)

  const handleFilter = (e) => {
    setQuery(e.target.value)
    const results = users.filter(user => user.first_name.toLowerCase().includes(e.target.value.toLowerCase()))
 setFilteredUsers(results) 
    

  }


  return (
    <div>
      <input type="text" value={query} onChange={handleFilter}/>
   <table className="table table-striped">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Avatar</th>
      </tr>
    </thead>
    <tbody>
    {
      query.length > 0 ? filteredUsers.map(user => {
        return <tr>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td><img src={user.avatar} alt="avatar"/></td>
        </tr>
      }
      ) : users.map(user => {
        return <tr>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td><img src={user.avatar} alt="avatar"/></td>
        </tr>
      }
      )
    }
    </tbody>
  </table>
   
    </div>
  )
}

   

export default App