import React,{ PureComponent,useState,useEffect } from 'react'
import { BarChart,Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const App = () => {
 const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => {
      setData(data.Countries)
      console.log(data.Countries.map(item => item.TotalConfirmed))
    }
    )
  }, [])

  
 
  return (
    <div>
    <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="Country" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="TotalConfirmed" stackId="a" fill="#000" />
      <Bar dataKey="TotalDeaths" stackId="a" fill="#5555" />
      <Bar dataKey="TotalRecovered" stackId="a" fill="#ffc658" />
    </BarChart>
    </ResponsiveContainer>
    </div>
 
  )
}

export default App