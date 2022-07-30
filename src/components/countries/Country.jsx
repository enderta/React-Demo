import React from 'react'
import {Button, Form} from 'react-bootstrap'

const Country = () => {
  const [country, setCountry] = React.useState('')
  const [countryInfo, setCountryInfo] = React.useState([])

  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "3sVCbYLK1DqtVPikLz9ldg==TnZcdT2kmjuax6jV");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`https://api.api-ninjas.com/v1/country?name=${country}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setCountryInfo(result)
      }
      , [])
  }, [country])

  // const handleChange = (e) => {
  //   setCountry(e.target.value)
  // }
  
  console.log(countryInfo)

  return (
    <div>
      <h1>Country Info</h1>
     <form onSubmit={(e) => {
        e.preventDefault()
        setCountry(e.target.country.value)
      }
      }>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Country Name</Form.Label>
          <Form.Control type="text" name="country" placeholder="Enter Country Name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
      <div>
      <table className="table table-striped">
        {
          countryInfo.map(item => {
            return (
              <>
              <thead>
              <tr>
                <th scope="col">Info</th>
                <th scope="col">Data</th>
              </tr>
              </thead>
              <tr>
                <th>Country Name</th>
                <td>{item.name}</td>
              </tr>
              <tr>
                <th>Capital</th>
                <td>{item.capital}</td>
              </tr>
              <tr>
                <th>Region</th>
                <td>{item.region}</td>
              </tr>
              <tr>
              <th>Population</th>
              <td>{(item.population).toLocaleString('en-US',{maximumFractionDigits:2})+" mil"}</td>
              </tr>
              <tr>
              <th>Area</th>
              <td>{(item.surface_area).toLocaleString('en-US',{maximumFractionDigits:2})+" km2"}</td>
              </tr>
              <tr>
              <th>GDP</th>
              <td>{(item.gdp).toLocaleString('en-US',{maximumFractionDigits:2})+" $"}</td>
              </tr>
              <tr>
              <th>GDP Per Capita</th>
              <td>{(item.gdp_per_capita).toLocaleString('en-US',{maximumFractionDigits:2})+" $"}</td>
              </tr>
              <tr>
              <th>GDP Growth</th>
              <td>{(item.gdp_growth).toLocaleString('en-US',{maximumFractionDigits:2})+" %"}</td>
              </tr>
              <tr>
              <th>Currency</th>
              <td>{item.currency.code}</td>
              </tr>
              </>
            

            )
          })
        }

      </table>
      </div>

         
    </div>
    
  )
}

export default Country