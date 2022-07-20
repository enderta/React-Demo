import React,{ PureComponent } from 'react'
import { BarChart,Bar,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const App = () => {
  const data = [
  {
    country: 'USA',
    inflation: 2.3,
    population: 32.2,
    gdp: 3.6,
  },
  {
    country: 'China',
    inflation: 3.4,
    population: 32.6,
    gdp: 4.8,
  },
  {
    country: 'Japan',
    inflation: 4.5,
    population: 32.8,
    gdp: 6.0,
  }
  
  ];
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="country" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="inflation" fill="#8884d8" />
          <Bar dataKey="population" fill="#82ca9d" />
          <Bar dataKey="gdp" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>


    </div>
  )
}

export default App