import React from 'react'
import { ResponsiveContainer,Bar,BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from 'recharts'
import worldbankcss from './worldbank.css'

const WorldBankCharts = (props) => {
  return (
    <div>
      <h1>World Bank Charts</h1>
      <ResponsiveContainer className='container' width={400} height={400}>
        <BarChart
          data={props.data}
         
        >
          <XAxis dataKey="country.value" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

   

export default WorldBankCharts