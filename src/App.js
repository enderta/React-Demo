import React from 'react'

const App = () => {
  const [query, setQuery] = React.useState('')
  const users=[
    {id:1,first_name:'John',last_name:'Doe',email:'jd@mail.com',gender:'male'},
    {id:2,first_name:'Jane',last_name:'Doe',email:'jane@mail.com',gender:'female'},
    {id:3,first_name:'Fane',last_name:'Doe',email:'jane@mail.com',gender:'female'},
    {id:4,first_name:'Lane',last_name:'Doe',email:'jane@mail.com',gender:'female'},
    {id:5,first_name:'Sane',last_name:'Doe',email:'jane@mail.com',gender:'female'},
    {id:6,first_name:'Dane',last_name:'Doe',email:'jane@mail.com',gender:'female'},
    


  ]
 
  

  return (
    <div className='app'>
    <input type="text" placeholder='Search...' className="search" onChange={(e)=>setQuery(e.target.value)} />
   <table>
    <thead>
      <td>
        ID
      </td>
      <td>
        First Name
      </td>
      <td>
        Last Name
      </td>
    
    </thead>
    <tbody>
      {users.filter(user=>user.first_name.toLowerCase().includes(query.toLowerCase())
      || user.last_name.toLowerCase().includes(query.toLowerCase)).map(user=>(
        <tr key={user.id}>
          <td>
            {user.id}
          </td>
          <td>
            {user.first_name}
          </td>
          <td>
            {user.last_name}
          </td>
      </tr>
      ))}
    </tbody>
   </table>
    </div>
  )
}

export default App