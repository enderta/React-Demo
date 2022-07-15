
import React from 'react'
import {Table,Button,Form,FormControl} from 'react-bootstrap'

const Meduna = () => {
  const [profile,setProfile]=React.useState([])
  const [input,setInput]=React.useState('')
  const [searchResults,setSearchResults]=React.useState([])


  


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
        setProfile(result)
        setSearchResults(result)
      }
      )
      .catch(error=>console.log('error',error))
     
    })
  },[])

  const handleSearch = (e) => {

    setInput(e.target.value)
    const results = profile.filter(profile => profile.firstName.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchResults(results)
  }

const handleInput = (e) => {
  setInput(e.target.value)
  const results = profile.filter(profile => profile.firstName.toLowerCase().includes(input.toLowerCase()))
  setSearchResults(results)
}

const handleClick = (e) => {
  e.preventDefault()
  // const results = profile.filter(profile => profile.firstName.toLowerCase().includes(input.toLowerCase()))
  // setSearchResults(results)
}


  return (

   

    <div>
    <Form className='d-flex'>
    <FormControl type='text' placeholder='Search' value={input} onChange={handleInput} />
    <Button onClick={handleClick}>Search</Button>
    </Form>

     
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
          {
            searchResults.map(profile=>(
              <tr key={profile.id}>
                <td>{profile.firstName}</td>
                <td>{profile.lastName}</td>
                <td>{profile.email}</td>
                <td>{profile.ssn}</td>
              </tr>
            ))

          }

        </tbody>
      </Table>

    </div>
  )
}

export default Meduna