import React from 'react'
import { useState,useEffect } from 'react'
import { Table } from 'react-bootstrap'

const App = () => {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(users)
  const [isLoading, setIsLoading] = useState(false)
const handleFilter=async()=>{
  const response=await fetch(`https://random-data-api.com/api/users/random_user?size=10`)
  const data=await response.json()
  setUsers(data)
  setFilteredUsers(data)
}
useEffect(()=>{
  handleFilter()
}
,[])

const handleQuery=(e)=>{
  setQuery(e.target.value)
  const filtered=users.filter(user=>{
    return user.first_name.toLowerCase().includes(e.target.value.toLowerCase())
  }
  )
  setFilteredUsers(filtered)
  
}

const handleLoading=()=>{
  setIsLoading(true)
  setTimeout(()=>{
    setIsLoading(false)
  }
  ,2000)
}



  return (
    <div>
   <input style={{position:'fixed'}} type="text" placeholder='search...' value={query} onChange={handleQuery}  />
   <br/>
   <br/>
   {
      isLoading?<h1>Loading...</h1>:
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Avatar</th>
    </tr>
  </thead>
  <tbody>
    {filteredUsers.map((user,index)=>{
      return(
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td><img src={user.avatar} style={{height:'5em'}} alt="avatar"/></td>
        </tr>
      )
    }
    )}
  </tbody>
</Table>
   }


    </div>
  )
}

   

export default App