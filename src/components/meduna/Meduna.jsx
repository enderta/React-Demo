
import React from 'react'
import {Table} from 'react-bootstrap'

const Meduna = () => {
  const [data,setData]=React.useState([])

  


  React.useEffect(()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": "adminaccount",
      "password": "12345",
      "rememberMe": "true"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    let tkn='';
    
    fetch("https://medunna.com/api/authenticate", requestOptions)
    .then(response=>response.json())
    .then(result=>{
      tkn=result.id_token;
      console.log(tkn)
    })
    .catch(error=>console.log('error',error))
    .then(()=>{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", "Bearer "+tkn);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("https://medunna.com/api/users", requestOptions)
      .then(response=>response.json())
      .then(result=>{
        setData(result)
      }
      )
      .catch(error=>console.log('error',error))
     
    })
  },[])


  return (
   

    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>SSN</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user=>(
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.ssn}</td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  )
}

export default Meduna