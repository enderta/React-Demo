import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')

  
  
  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=3')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  console.log(users)



  return (
    <div>
      <input type="text" placeholder='search...' onChange={(e)=>setQuery(e.target.value)} />
      <ul>
        {
          users.filter(user => user.first_name.toLowerCase().includes(query.toLowerCase()) || user.last_name.toLowerCase().includes(query.toLowerCase())).map(user => {
            return <li>{user.first_name} {user.last_name}</li>
          }
          )
        }

      </ul>
   
    </div>
  )
}

   

export default App