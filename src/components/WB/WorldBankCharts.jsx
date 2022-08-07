import React from 'react'
import { ResponsiveContainer,Bar,BarChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend } from 'recharts'
import worldbankcss from './worldbank.css'

const WorldBankCharts = (props) => {
  console.log(props.data[1])
  return (
    <div>
      <h1>World Bank Charts</h1>
      <ResponsiveContainer className='container' width={400} height={400} fill="red">
        <BarChart
          data={props.data
          
          }
         
        >
          <XAxis dataKey="country.value" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" fill='yellow' />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="red" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

   

export default WorldBankCharts