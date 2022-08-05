import React from 'react'
import {useState} from 'react'

const Select = () => {
    const [obj, setObj] = useState('')
    let data={
      'usa':'USD',
      'india':'INR',
      'china':'CNY',
      'japan':'JPY',
      'korea':'KRW',
      'australia':'AUD'
    }
    const handleChange = (e) => {
      setObj(e.target.value)
    }
    const handleSubmit = (e) => {
      e.preventDefault()
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <select value={obj} onChange={handleChange}>
            <option value="">Select Comodity</option>
            {Object.keys(data).map(key => (
              <option key={key} value={key}>{key}</option>
            ))}
  
          </select>
          </form>
          <div>
            <h1>{data[obj]}</h1>
            </div>
       
      </div>
    )
  }

export default Select