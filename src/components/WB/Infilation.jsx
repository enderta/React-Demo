import React,{useEffect,useState} from 'react'
import {Table} from 'react-bootstrap' 
import { ResponsiveContainer,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Line, BarChart } from 'recharts'
import './worldbank.css'

const Infilation = () => {
const [inflation, setInflation] = React.useState([])
const [search, setSearch] = React.useState('')
const [searchResults, setSearchResults] = React.useState([])

  React.useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '07475edaadmsh706c2d5e735b7aep1e4912jsnbb5010132758',
        'X-RapidAPI-Host': 'inflation-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch('https://inflation-by-api-ninjas.p.rapidapi.com/v1/inflation', options)
      .then(response => response.json())
      .then(data => {
        setInflation(data)
        setSearchResults(data)
      }
      )
  }, [])
  
  const handleSearch = (e) => {
    setSearch(e.target.value) 
    const results = inflation.filter(inflation => inflation.country.toLowerCase().includes(search.toLowerCase()))
    setSearchResults(results)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
  }





  return (
    <>
      <h1>Inflation</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSearch} value={search} placeholder="Search for a country..." />
        </form>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Country</th>
            <th>Yearly Rate</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(inflation => (
            <tr key={inflation.id}>
              <td>{inflation.country}</td>
              <td>{inflation.yearly_rate_pct}</td>
              <td>{inflation.period}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h1>Grafic</h1>
        <div>
          <ResponsiveContainer width="100%" height={300}>
           <BarChart data={searchResults}>
              <XAxis dataKey="country">
              june 2022
              </XAxis>
              <YAxis />
              <CartesianGrid strokeDasharray="8 8" />
              <Tooltip />
              <Legend />
              <Bar dataKey="yearly_rate_pct" fill="#8884d8" />
            </BarChart>

          </ResponsiveContainer>
        </div>
      </div>
    </>
      

        

    
  )
}

export default Infilation